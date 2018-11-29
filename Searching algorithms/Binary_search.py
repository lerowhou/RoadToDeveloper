def binsearch(arr, n):
    if len(arr)==0 or (len(arr)==1 and arr[0]!=n):
        return False
    mid=arr[len(arr)//2]
    if mid==n: return True
    if n<mid: return binsearch(arr[:len(arr)//2],n)
    if n>mid: return binsearch(arr[len(arr)//2+1:],n)

#arr=[int(x) for x in input().split(' ')]
arr=[int(x) for x in range(1,56)]
n=int(input())
print(arr)
print(binsearch(arr, n))
