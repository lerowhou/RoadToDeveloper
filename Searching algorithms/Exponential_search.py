import math

def binsearch(arr, n):
    if len(arr)==0 or (len(arr)==1 and arr[0]!=n):
        return False
    mid=arr[len(arr)//2]
    if mid==n: return True
    if n<mid: return binsearch(arr[:len(arr)//2],n)
    if n>mid: return binsearch(arr[len(arr)//2+1:],n)

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
        return binsearch(arr[y-step:y],n)
#arr=[int(x) for x in input().split(' ')]
arr=[int(x) for x in range(1,100,4)]
n=int(input())
print(arr)
print(jumpsearch(arr, n))
