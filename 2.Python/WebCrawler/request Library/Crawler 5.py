from importlib import import_module
import requests
from bs4 import BeautifulSoup
import pyautogui

keyword = pyautogui.prompt("검색어를 입력하세요.")
lastPage = pyautogui.prompt("마지막 페이지 번호를 입력해 주세요.")
pageNum = 1
for i in range(1, int(lastPage)*10, 10):
    print(f"{pageNum}페이지입니다==============================================================")
    response = requests.get(
        f"https://search.naver.com/search.naver?where=news&sm=tab_jum&query={keyword}&start={i}")
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    links = soup.select(".news_tit")  # 결과를 리스트형태로
    # print(links)
    for link in links:
        title = link.text  # tag 안의 text 속성 return
        url = link.attrs['href']  # href의 속성값 return
        print(title, url)
    pageNum = pageNum+1
