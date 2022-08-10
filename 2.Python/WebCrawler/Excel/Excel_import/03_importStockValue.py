from importlib import import_module
from urllib import response
import requests
from bs4 import BeautifulSoup
import openpyxl


fpath = r"C:\Users\user\Documents\Study\2.Python\WebCrawler\Excel\data\data.xlsx"
wb = openpyxl.load_workbook(fpath)

ws = wb.active

# codelist

codes = [
    '005930',
    '000660',
    '035720'
]

row = 2
for code in codes:
    url = f"https://finance.naver.com/item/sise.naver?code={code}"
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    price = soup.select_one("#_nowVal").text
    price = price.replace(",", "")
    print(price)
    ws[f"B{row}"] = int(price)
    row = row + 1


wb.save(fpath)
