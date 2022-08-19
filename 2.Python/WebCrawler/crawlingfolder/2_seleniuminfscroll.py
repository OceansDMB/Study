from lib2to3.pgen2 import driver
from tkinter import BROWSE
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import time
# create browser
from webdriver_manager.chrome import ChromeDriverManager

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

service = Service(executable_path=ChromeDriverManager().install())
browser = webdriver.Chrome(service=service, options=chrome_options)


# open browser
browser.get("https://www.naver.com")
browser.implicitly_wait(1)

# Click Shopping menu
browser.find_element(By.CSS_SELECTOR, 'a.nav.shop').click()
time.sleep(0.1)
# Click search menu
search = browser.find_element(
    By.CSS_SELECTOR, 'input._searchInput_search_input_QXUFf')
search.click()

# search val
search.send_keys("samsung memory")
search.send_keys(Keys.ENTER)

# ex_scroll_height
beforeH = browser.execute_script("return window.scrollY")


while True:
    # 맨 아래로 스크롤을 내린다.
    browser.find_element(By.CSS_SELECTOR, "body").send_keys(Keys.END)

    # 스크롤 사이 페이지 로딩 시간
    time.sleep(0.1)

    # 스크롤 후 높이
    afterH = browser.execute_script("return window.scrollY")

    if afterH == beforeH:
        break
    beforeH = afterH
# commercial div
items = browser.find_elements(By.CSS_SELECTOR, "basicList_info_area__17Xyo")

for item in items:
    name = item.find_element(By.CSS_SELECTOR, "basicList_title__3P9Q7").text
    price = item.find_element(By.CSS_SELECTOR, "price_num__2WUXn").text
    link = item.find_element(
        By.CSS_SELECTOR, "basicList_title__3P9Q7").get_attribute('href')
    print(name, price, link)
