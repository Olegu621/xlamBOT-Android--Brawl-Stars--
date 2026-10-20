"""Check public HTML metadata, local links, anchors and sitemap without dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from collections import Counter
import json
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids=[]; self.links=[]; self.canonical=[]; self.descriptions=[]
        self.h1=0; self.structured=[]; self.current=None

    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if attrs.get('id'):self.ids.append(attrs['id'])
        if tag=='h1':self.h1+=1
        if tag=='link' and attrs.get('rel')=='canonical':self.canonical.append(attrs.get('href'))
        if tag=='meta' and attrs.get('name')=='description':self.descriptions.append(attrs.get('content'))
        if tag=='script' and attrs.get('type')=='application/ld+json':self.current=''
        for field in ['href','src','poster']:
            if attrs.get(field):self.links.append(attrs[field])

    def handle_data(self,data):
        if self.current is not None:self.current+=data

    def handle_endtag(self,tag):
        if tag=='script' and self.current is not None:
            self.structured.append(json.loads(self.current)); self.current=None

def check():
    pages={}
    for file in (ROOT/'docs').rglob('*.html'):
        page=Page(); page.feed(file.read_text(encoding='utf-8')); pages[file.resolve()]=page
        assert page.h1==1 and len(page.canonical)==1 and len(page.descriptions)==1 and page.structured,file
        assert not [key for key,count in Counter(page.ids).items() if count>1],file
        assert 'noindex' not in file.read_text(encoding='utf-8'),file
        assert 'xlamBOT-Android-downloads' not in page.canonical[0],file
    for file,page in pages.items():
        for href in page.links:
            url=urlparse(href)
            if url.scheme or url.netloc:continue
            target=(file.parent/unquote(url.path)).resolve() if url.path else file
            if target.is_dir():target=target/'index.html'
            assert target.is_file(),(file,href,target)
            if url.fragment and target in pages:assert url.fragment in pages[target].ids,(file,href)
    urls={entry.text for entry in ET.parse(ROOT/'docs/sitemap.xml').findall('.//{*}loc')}
    assert urls=={page.canonical[0] for page in pages.values()}
    assert len(pages)==5
    print(f'PASS {len(pages)} HTML pages: metadata, JSON-LD, local links, anchors and sitemap')

if __name__=='__main__':check()
