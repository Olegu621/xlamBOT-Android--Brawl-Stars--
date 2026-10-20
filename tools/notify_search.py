"""Notify IndexNow about deployed URLs; receipt is not an indexing guarantee."""
from pathlib import Path
import argparse,json,re,sys,urllib.request,urllib.error,xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent
BASE='https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/'
ENDPOINTS={'indexnow':'https://api.indexnow.org/indexnow','bing':'https://www.bing.com/indexnow'}

def request(value):
    for attempt in range(2):
        try:
            with urllib.request.urlopen(value,timeout=30) as response:
                return response.status,response.read()
        except urllib.error.HTTPError:
            raise
        except urllib.error.URLError:
            if attempt:raise

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--endpoint',choices=ENDPOINTS,default='indexnow')
    args=parser.parse_args()
    key=(ROOT/'docs/indexnow.txt').read_text(encoding='ascii').strip()
    if not re.fullmatch('[a-f0-9]{32}',key):raise ValueError('Invalid ownership key')
    _,remote=request(BASE+'indexnow.txt')
    if remote.decode().strip()!=key:raise ValueError('Publish the ownership file before submitting')
    urls=[entry.text for entry in ET.parse(ROOT/'docs/sitemap.xml').findall('.//{*}loc')]
    if not urls or not all(url.startswith(BASE) for url in urls):raise ValueError('URLs outside owned project path')
    payload={'host':'olegu621.github.io','key':key,'keyLocation':BASE+'indexnow.txt','urlList':urls}
    notification=urllib.request.Request(ENDPOINTS[args.endpoint],data=json.dumps(payload).encode('utf-8'),headers={'Content-Type':'application/json; charset=utf-8'},method='POST')
    status,_=request(notification)
    print(json.dumps({'endpoint':args.endpoint,'http_status':status,'urls_submitted':len(urls),'key_validation_pending':status==202,'indexed':False,'note':'Receipt does not guarantee indexing or ranking.'}))

if __name__=='__main__':
    try:main()
    except (ValueError,OSError,urllib.error.URLError) as error:
        print(json.dumps({'error':str(error),'indexed':False}),file=sys.stderr)
        sys.exit(1)
