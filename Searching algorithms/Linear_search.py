def linesearch(arr, n):
    for i in arr:
        if i!=n: continue
        if i==n: return True
    return False

#arr=[int(x) for x in input().split(' ')]
arr=[int(x) for x in range(1,56)]
n=int(input())
print(linesearch(arr, n))
