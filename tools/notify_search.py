"""Notify IndexNow about already deployed public pages, without a Google login."""
from pathlib import Path
import json,re,urllib.request,xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent
BASE='https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/'
KEY=(ROOT/'docs/indexnow.txt').read_text(encoding='ascii').strip()
if not re.fullmatch('[a-f0-9]{32}',KEY):raise SystemExit('Invalid local ownership key')
remote=urllib.request.urlopen(BASE+'indexnow.txt',timeout=30).read().decode().strip()
if remote!=KEY:raise SystemExit('Publish the ownership file before notifying search engines')
urls=[x.text for x in ET.parse(ROOT/'docs/sitemap.xml').findall('.//{*}loc')]
if not urls or not all(url.startswith(BASE) for url in urls):raise SystemExit('URLs outside owned project path')
payload={'host':'olegu621.github.io','key':KEY,'keyLocation':BASE+'indexnow.txt','urlList':urls}
request=urllib.request.Request('https://api.indexnow.org/indexnow',data=json.dumps(payload).encode('utf-8'),headers={'Content-Type':'application/json; charset=utf-8'},method='POST')
with urllib.request.urlopen(request,timeout=45) as response:
 print(json.dumps({'endpoint':'IndexNow','http_status':response.status,'urls_submitted':len(urls),'indexed':False,'note':'Receipt does not guarantee indexing or ranking.'}))
