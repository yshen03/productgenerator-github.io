# -*- coding: utf-8 -*-
import time
import requests
from bs4 import BeautifulSoup

filename = "object_index.txt"

with open(filename) as f:
    lines = f.readlines()
    output = open('definition.txt', 'w+')
    for line in lines:
        word = line.strip()
        try:
            url = "https://www.lexico.com/en/definition/" + word
            r = requests.get(url)
            soup = BeautifulSoup(r.text, 'html.parser')
            div = soup.find(name='span', attrs={'class': 'ind'})
            data = (div.get_text())
            output.write(data.strip() + '\n')
        except:
            print("Parsing word %s failed." % word)
        time.sleep(0.5)
    output.close()

