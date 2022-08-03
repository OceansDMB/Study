from urllib import response
import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.naver.com")

# naver 에서 html 줌
html = response.text

# html 번역선생님으로 수프 만듦
soup = BeautifulSoup(html, "html.parser")

# id 값이 NM_set_home인 값 하나를 찾아서 할당.
word = soup.select_one('#NM_set_home_btn')

# 텍스트 요소만 출력
print(word.text)
