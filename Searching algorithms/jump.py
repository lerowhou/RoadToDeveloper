import linear
import math

def jsearch(arr, n):
  step = int(math.sqrt(len(arr)))
  i=step
  while i <=len(arr)-1:
    if arr[i]==n: return i
    elif arr[i]>n: return linear(arr[i-step:i],n)
    elif arr[i]<n: i+=step
  return i

arr = [1,2,3,4,5,6,7,8,9,13,15]
n=int(input())
print(jsearch(arr,n))
