def quick(arr):
    def partitioning(arr):
        i=0
        for j in range(len(arr)-1):
            if arr[j]<=arr[len(arr)-1]:
                arr[j],arr[i]=arr[i],arr[j]
                i+=1
            else: continue
        arr[i],arr[len(arr)-1]=arr[len(arr)-1],arr[i]
        print("2 array:", arr)
        print("The I is:", i,"element. It is:", arr[i])
        print(arr[i:    ])
        return i


    return partitioning(arr)

arr=[9,8,7,6,5,4,3,2,1]
#arr=[67,23,12,6,421,1,0,7,55,24,12,123,35,3,99,28]
print("Array length: ", len(arr)-1)
print("1 array:", arr)
print(quick(arr))
