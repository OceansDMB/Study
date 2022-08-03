import imp
from nturl2path import url2pathname
import requests
from bs4 import BeautifulSoup

response = requests.get(
    "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90")
html = response.text
soup = BeautifulSoup(html, 'html.parser')
links = soup.select(".news_tit")  # 결과를 리스트형태로
# print(links)
for link in links:
    title = link.text  # tag 안의 text 속성 return
    url = link.attrs['href']  # href의 속성값 return
    print(title, url)
