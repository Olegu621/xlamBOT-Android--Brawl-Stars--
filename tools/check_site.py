"""Check public HTML metadata, local links, anchors and sitemap without dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from collections import Counter
import json,re
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids=[]; self.links=[]; self.canonical=[]; self.descriptions=[]
        self.h1=0; self.structured=[]; self.current=None
        self.title=''; self.heading=''; self.in_title=False; self.in_heading=False; self.meta={}

    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='title':self.in_title=True
        if tag=='h1':self.in_heading=True
        if tag=='meta':self.meta[attrs.get('name') or attrs.get('property')]=attrs.get('content','')
        if attrs.get('id'):self.ids.append(attrs['id'])
        if tag=='h1':self.h1+=1
        if tag=='link' and attrs.get('rel')=='canonical':self.canonical.append(attrs.get('href'))
        if tag=='meta' and attrs.get('name')=='description':self.descriptions.append(attrs.get('content'))
        if tag=='script' and attrs.get('type')=='application/ld+json':self.current=''
        for field in ['href','src','poster']:
            if attrs.get(field):self.links.append(attrs[field])

    def handle_data(self,data):
        if self.current is not None:self.current+=data
        if self.in_title:self.title+=data
        if self.in_heading:self.heading+=data

    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='h1':self.in_heading=False
        if tag=='script' and self.current is not None:
            self.structured.append(json.loads(self.current)); self.current=None

def check():
    pages={}; indexed={}; titles=set(); descriptions=set()
    for file in (ROOT/'docs').rglob('*.html'):
        source=file.read_text(encoding='utf-8')
        page=Page(); page.feed(source); pages[file.resolve()]=page
        if file.name=='404.html':
            assert 'noindex' in page.meta.get('robots','') and page.h1==1,file
            continue
        indexed[file.resolve()]=page
        assert page.h1==1 and len(page.canonical)==1 and len(page.descriptions)==1 and page.structured,file
        assert 'xlambot' in page.heading.lower(),file
        assert page.title not in titles and page.descriptions[0] not in descriptions,file
        titles.add(page.title); descriptions.add(page.descriptions[0])
        assert page.meta.get('og:url')==page.canonical[0],file
        assert page.meta.get('og:image') and page.meta.get('twitter:image'),file
        assert 'fonts.googleapis.com' not in source and 'fonts.gstatic.com' not in source,file
        assert not [key for key,count in Counter(page.ids).items() if count>1],file
        assert 'noindex' not in source,file
        assert 'xlamBOT-Android-downloads' not in page.canonical[0],file
    for file,page in pages.items():
        for href in page.links:
            url=urlparse(href)
            if url.scheme or url.netloc:continue
            prefix='/xlamBOT-Android--Brawl-Stars--/'
            target=((ROOT/'docs')/unquote(url.path[len(prefix):])).resolve() if url.path.startswith(prefix) else ((file.parent/unquote(url.path)).resolve() if url.path else file)
            if target.is_dir():target=target/'index.html'
            assert target.is_file(),(file,href,target)
            if url.fragment and target in pages:assert url.fragment in pages[target].ids,(file,href)
    urls={entry.text for entry in ET.parse(ROOT/'docs/sitemap.xml').findall('.//{*}loc')}
    assert urls=={page.canonical[0] for page in indexed.values()}
    assert len(indexed)==7
    video=ET.parse(ROOT/'docs/sitemap.xml').findall('.//{http://www.google.com/schemas/sitemap-video/1.1}video')
    assert len(video)==1 and video[0].find('{*}duration').text=='17'
    font_dir=ROOT/'docs/assets/fonts'
    for name in re.findall(r'url\(([^)]+)\)',(font_dir/'fonts.css').read_text(encoding='utf-8')):
        assert (font_dir/name).read_bytes().startswith(b'wOF2'),name
    assert (ROOT/'docs/index.html').read_text(encoding='utf-8').count('name="google-site-verification"')==1
    print(f'PASS {len(indexed)} indexable pages + 404: unique metadata, local fonts, JSON-LD, links and video sitemap')

if __name__=='__main__':check()
