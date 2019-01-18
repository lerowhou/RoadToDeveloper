def binary(arr,n):
    mid= len(arr)//2
    if arr[mid]==n: return mid
    elif n>arr[mid]: return binary(arr[len(arr)//2],n)
    elif n<arr[mid]: return binary(arr[:len(arr)//2-1],n)
    return False

def exponential(arr, n):
    if arr[0]==n: return 0
    i=1
    while arr[i]<n:
        i=i*2
        return binary(arr[i//2:i],n)
    return False

arr = [1,2,3,4,5,6,7,8,9,13,15,33]
n=int(input())
print(exponential(arr,n))
