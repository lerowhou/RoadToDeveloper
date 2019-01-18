def binary(arr,n):
  if arr[0]>n or arr[len(arr)-1]<n: return False
  mid= len(arr)//2
  if arr[mid]==n: return mid
  elif n>arr[mid]: return binary(arr[len(arr)//2],n)
  elif n<arr[mid]: return binary(arr[:len(arr)//2-1],n)
  return False


arr = [1,2,3,4,5,6,7,8,9,13,15]
n=int(input())
print(arr)
print(binary(arr,n))
