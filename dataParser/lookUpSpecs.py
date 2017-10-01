import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--field', const="field", nargs='?',
                    help='Management,Business')

args = parser.parse_args()
input = args.field


ret=[]
file =open('specs.txt')
for line in file:
  if 'NOC' in line:
    continue
  number = line.split()[0]
  if len(number)==5:
    pass
  else:
    continue
  number = number[:-2]
  if input == number[:2] or str(input) == number[:2]:
    a = line[4:].replace("\n",'').replace("\xa0",'')
    ret.append([a, number])



print ret
