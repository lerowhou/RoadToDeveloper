# Linear search

This one is very simple and least efficient. It just takes each element in the array and compares with element you looking for. If they are
equals each other - function will return **True** of element's index (place in the array). 

**Complexity**<br>
The time complexity of above algorithm is O(n).

**Example:** <br>
Let's suppose that we have array [1,2,3,4,5,6,7,8,9,14] and we want to find 14 there. The function will get first to compare with 14 than second
and so on until it find 14 on the last place.

# Python

```python
def linsearch(arr, n,l,h):
  for i in range(l,h):
    if arr[i]==n:
      return(i)
    else:
      continue
  return False


arr = [int(j) for j in range(1,53)]
n=int(input())
l,h= 0,len(arr)-1
print(linsearch(arr,n,l,h))
```

# JavaScript

```js
var arr = [1,2,3,4,5,56,6,7,78,8];
var n = 56;

function linear(arr, n){
  for(i=0;i<=arr.length-1;i++){
    if(arr[i]!=n){
      continue
    }
    else if(arr[i]==n){
      console.log("Your element here: "+i);
    }
  }
}

console.log(linear(arr, n));
```
