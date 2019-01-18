def linear(arr,n):
  for i in range(len(arr)):
    if arr[i]==n: return i
    else: continue
  return False

arr = [1,2,3,4,5,6,7,8,9,13,15]
n=int(input())
print(linear(arr,n))
