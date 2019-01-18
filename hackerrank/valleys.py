#https://www.hackerrank.com/challenges/counting-valleys/problem

def countingValleys(n, s):
    level = 0
    v=0
    for i in s:
        if i is "U":
            level=level+1
            if level == 0:
                v=v+1
        if i is"D":
            level=level-1
    return v



n = int(input())
s = input()
print(countingValleys(n, s))
