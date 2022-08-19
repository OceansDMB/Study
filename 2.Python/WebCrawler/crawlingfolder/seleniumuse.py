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
search.send_keys("포켓몬빵")
search.send_keys(Keys.ENTER)


while(True):
    pass
