# 이미지 크롤링 프로그램
# Started on 2020-05-07
# Coded by Glacier Han
# h-glacier.tistory.com

from bs4 import BeautifulSoup as bs
from urllib.request import urlopen
from urllib.parse import quote_plus
import datetime

# 프로그램 시작, 인트로 기능
print('\n >>> 이미지 파일 크롤링 프로그램입니다. 환영합니다! <<<\n')
now = datetime.datetime.now()
nowDate = now.strftime('      현재 시간 %Y년 %m월 %d일 %H시 %M분 입니다.\n\n')
print(nowDate)

# 메인 기능
while True:
    Main_Url = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='
    Search_Url = input(' >> 검색어를 입력해 주세요 : ')
    crawl_num = int(input(' >> 크롤링할 이미지 갯수를 입력해 주세요 : '))

    url = Main_Url + quote_plus(Search_Url)
    html = urlopen(url)
    soup = bs(html, "html.parser")
    img = soup.find_all(class_='_img')

    num = 1
    for i in img:
        print('    ※ ', num, '번째 파일 다운로드가 완료되었습니다!')
        img_Url = i['data-source']
        with urlopen(img_Url) as f:
            # 이미지 저장위치 + 파일이름 지정
            with open('./web1/img' + Search_Url + str(num)+'.jpg', 'wb') as h:
                img = f.read()
                h.write(img)
        num += 1
        if num > crawl_num:
            break

    print('\n  모든 크롤링이 완료되었습니다! \n ')

    # 종료 확인
    requ = int(input('>>> 프로그램을 종료하려면 1을, 계속 크롤링 하시려면 2를 입력해 주세요 : '))
    print('\n')
    if requ == 2:
        continue
    else:
        break
