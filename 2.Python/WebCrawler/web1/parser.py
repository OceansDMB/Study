# parser.py / web crawling module.

import json
import requests
from bs4 import BeautifulSoup
import json
import os

# python dir
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# HTTP GET Request

req = requests.get('https://beomi.github.io/beomi.github.io_old/')

# HTML 소스 가져오기
html = req.text
# HTTP Header 가져오기
# header = req.headers
# HTTP Status 가져오기 (200: 정상)
# status = req.status_code
# HTTP가 정상적으로 되었는지 (True/False)
# is_ok = req.ok
soup = BeautifulSoup(html, 'html.parser')

my_titles = soup.select(
    'h3 > a'
)

data = {}

for title in my_titles:
    print(title.text)
    print(title.get('href'))

with open(os.path.join(BASE_DIR, 'result.json'), 'w+') as json_file:
    json.dump(data, json_file)
