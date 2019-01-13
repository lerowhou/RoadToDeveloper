def binsearch(arr, n):
    if arr[0]>n or arr[len(arr)-1]<n: return False
    m = len(arr)//2
    if arr[m]==n: return m
    elif arr[m]>n: return binsearch(arr[:len(arr)//2], n)
    elif arr[m]<n: return binsearch(arr[len(arr)//2+1:], n)

arr=[int(x) for x in range(1,56)]
print(arr)
n=int(input())
print(binsearch(arr, n))
