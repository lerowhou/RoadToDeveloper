def linesearch(arr, n):
    sz = len(arr)-1
    if arr[0] > n or arr[sz] < n: return False
    for i in range(len(arr)):
        if arr[i] == n: return i
        else: continue
    return False

arr=[int(x) for x in range(1,50)]
print(arr)
n=int(input())
print(linesearch(arr, n))
