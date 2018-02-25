#!/usr/bin/python

words = []

with open('odm.txt') as f:
    for line in f.read().split('\n'):
        for word in line.split(", "):
            words.append(word.lstrip().rstrip().lower())

with open('words.ts', 'w') as f:
    f.write("export class Words {\n")
    f.write("public static WORDS = {\n")
    for word in words:
        f.write("\""+word+"\":true,\n")
    f.write("};}")
