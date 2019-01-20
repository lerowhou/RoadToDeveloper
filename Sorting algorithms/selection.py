def selection(arr):
    for i in range(len(arr)):
        min = i
        for j in range(i+1,len(arr)):
            if arr[min]>arr[j]:
                arr[min], arr[j]=arr[j], arr[min]
    return arr

arr=[5,3,7,9,3,6,67,23,12,6,421,1,0]
print(selection(arr))
