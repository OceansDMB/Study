from importlib import import_module
from urllib import response
import requests
from bs4 import BeautifulSoup
import pyautogui

# 종목 코드 리스트
codes = [
    '005930',
    '000660',
    '035720'
]

for code in codes:
    url = f"https://finance.naver.com/item/sise.naver?code={code}"
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    price = soup.select_one("#_nowVal")
    print(price)
