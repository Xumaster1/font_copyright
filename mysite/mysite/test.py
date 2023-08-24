f=open('F:\\font_project\\mysite\\cace.txt',encoding='utf-8')
txt=[]
dict = {}
for line in f:
    dict[line.strip().split('\t')[0]] = line.strip().split('\t')[2]

print(dict)