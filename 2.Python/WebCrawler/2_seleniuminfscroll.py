from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
# create browser
browser = webdriver.Chrome('C:/chromedriver.exe')
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)


# open browser
browser.get("https://www.naver.com")
browser.implicitly_wait(10)

# Click Shopping menu
browser.find_element(By.CSS_SELECTOR, 'a.nav.shop').click()
time.sleep(0.1)
# Click search menu
search = browser.find_element(
    By.CSS_SELECTOR, 'input._searchInput_search_input_QXUFf')
search.click()

# search val
search.send_keys("포켓")
search.send_keys(Keys.ENTER)

# ex_scroll_height
beforeH = browser.execute_script("return window.scroolY")

while True:
    # 맨 아래로 스크롤을 내린다.
    browser.find_elements(By.CSS_SELECTOR, 'body').send_keys(Keys.END)

    # 스크롤 사이 페이지 로딩 시간
    time.sleep(2)

    # 스크롤 후 높이
    afterH = browser.execute_script("return window.scroolY")

    if afterH == beforeH:
        break
    beforeH = afterH
