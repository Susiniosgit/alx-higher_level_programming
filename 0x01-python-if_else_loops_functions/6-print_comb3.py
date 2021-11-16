#!/usr/bin/python3
for firstDig in range(10):
    for secDigComb in range(10):
        if firstDig < secDigComb:
            print("{}{}".format(firstDig, secDigComb), end='\n'
                  if firstDig is 8 and secDigComb is 9 else ", ")
            # when 89 is found print the newline
            # otherwise comma and space
