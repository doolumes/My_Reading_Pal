import requests

BASE = "https://api.dictionaryapi.dev/api/v2/entries/en/"

response = requests.get(BASE + "grandiloquent")
data = response.json()
print(data[0]['word'].capitalize() + " (" +
      data[0]['meanings'][0]['partOfSpeech'] + "): " + data[0]['meanings'][0]['definitions'][0]['definition'])
