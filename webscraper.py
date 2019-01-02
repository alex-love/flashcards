from bs4 import BeautifulSoup
import requests

page_link = 'https://www.vocabulary.com/lists/274832'

page_responce = requests.get(page_link, timeout=5)

page_content = BeautifulSoup(page_responce.content, "html.parser")
wordContent = []

for i in range(0,499):
    wordEntry = page_content.find_all("a",class_="word")[i].text
    wordDef = page_content.find_all("div", class_="definition")[i].text
    wordContent.append((wordEntry,wordDef))

f = open("words.txt","w+")
for i in range(len(wordContent)):
    f.write("{},{}\n".format(wordContent[i][0], wordContent[i][1]))
    #f.write( " %s", " %s", ) % (wordContent[i][0], wordContent[i][1])

print ("should have worked")
path = os.path.abspath(f)
directory = os.path.dirname(path)
print ("path: {path}, directory: {directory}")
f.close()