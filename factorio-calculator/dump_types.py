import json

def print_info(values, index):
  ret = []
  for a in values.values():
    if a[index] not in ret:
      ret.append(a[index])
  print("===============")
  print(index, len(ret))
  print("===============")
  for b in ret:
    print('%s = "%s"' % (b.upper().replace("-", "_"), b))

with open('public/data/vanilla-0.16.51.json') as json_file:  
    data = json.load(json_file)
    print_info(data['recipes'], 'category')
    print_info(data['items'], 'type')
    print_info(data['items'], 'subgroup')