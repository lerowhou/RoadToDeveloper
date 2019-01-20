def binary(arr,l,r,n):
    mid= l+(r-l)//2
    if arr[mid]==n: return mid
    elif n>arr[mid]: return binary(arr,mid-1,r,n)
    elif n<arr[mid]: return binary(arr,l,mid+1,n)
    return False

def exponential(arr, n):
    if arr[0] == n:
        return 0
    i = 1
    while i < len(arr)-1 and arr[i] <= n:
        i = i * 2
        return binary(arr,i//2,i,n)

arr = [1,2,3,4,5,6,7,8,9,13,15,33]
n=int(input())
print(exponential(arr,n))
