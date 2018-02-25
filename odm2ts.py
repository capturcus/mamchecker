#!/usr/bin/python

words = {}

with open('odm.txt') as f:
    for line in f.read().split('\n'):
        for word in line.split(", "):
            words[word.lstrip().rstrip().lower()] = True

del words[""]

with open('words.txt', 'w') as f:
    for word in words:
        f.write(word+"\n")
