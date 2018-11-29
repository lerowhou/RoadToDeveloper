import math
def jumpsearch(arr, n):
    step=int(math.sqrt(len(arr)))
    x=0
    y=x+step
    if arr[len(arr)-1]<n or arr[0]>n:
        return False
    else:
        while arr[y-1]<n:
            x=y
            y=y+step
        #return arr[y-step:y]
        for i in arr[y-step:y]:
            if i!=n: continue
            if i==n: return True
        return False
#arr=[int(x) for x in input().split(' ')]
arr=[int(x) for x in range(1,100,4)]
n=int(input())
print(arr)
print(jumpsearch(arr, n))
