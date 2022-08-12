from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Chrome Driver Auto update
from webdriver_manager.chrome import ChromeDriverManager

# Browser Anti-exit
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# Error message x
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

service = Service(executable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# Webpage address Move
driver.get("https://www.google.com")
