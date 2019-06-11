import json

with open('public/data/vanilla-0.16.51.json') as json_file:  
    data = json.load(json_file)
    categories = []
    for recipe in data['recipes'].values():
      if recipe['category'] not in categories:
        categories.append(recipe['category'])
    for c in categories:
      print('%s = "%s"' % (c.upper().replace("-", "_"), c))