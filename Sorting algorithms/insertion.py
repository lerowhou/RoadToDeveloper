def insertion(arr):
    for i in range(len(arr)):
        j=i
        while j>0:
            if arr[j]<arr[j-1]: arr[j],arr[j-1]=arr[j-1],arr[j]
            else: break
            j-=1
    return arr

arr=[5,3,7,9,3,6,67,23,12,6,421,1,0]
print(insertion(arr))
