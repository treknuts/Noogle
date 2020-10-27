import requests
from bs4 import BeautifulSoup

page = requests.get('https://www.stackoverflow.com')
print(page.status_code)
soup = BeautifulSoup(page.content)
print(soup.prettify())