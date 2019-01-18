def intersearch(arr, n):
  l=0
  h=len(arr)-1
  while l<=h:
    pos = l+((n-arr[l])*(h-l)//(arr[h]-arr[l]))
    if arr[pos]==n: return pos
    elif arr[pos]<n: l=pos+1
    elif arr[pos]>n: h=pos-1
  return False

arr = [1,2,3,4,5,6,7,8,9,13,15]
n=int(input())
print(intersearch(arr,n))
