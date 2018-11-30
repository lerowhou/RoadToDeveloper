def ints(arr,n):
    l=0
    h=len(arr)-1
    mid=int(l+((h-l)/(arr[h]-arr[l]))*(n-arr[l]))
    if len(arr)==0 or (arr[0]>n or arr[len(arr)-1]<n): return False

    while arr[l]<=n:
        if arr[mid]==n: return True
        if arr[mid]>n:
            h=mid
        if arr[mid]<n:
            l=mid+1
    return False

arr=[int(x) for x in range(1,100,3)]
n=int(input())

print(arr)
print(ints(arr,n))
