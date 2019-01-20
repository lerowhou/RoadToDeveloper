def bubblesort(arr):
  l = len(arr)
  for _ in range(l):
    for i in range(l-1):
      if arr[i]>arr[i+1]: arr[i],arr[i+1]=arr[i+1],arr[i]
  return arr

arr=[5,3,7,9,3,6,67,23,12,6,421,1,0]
print(bubblesort(arr))
