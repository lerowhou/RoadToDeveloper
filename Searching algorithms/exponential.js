function exponential(arr,n,l,h){
  function binary(arr,n,l,h){
    console.log("The range: "+l+" to "+h);
    if (arr[l]>n || arr[h]<n){
      return false;
    }
    mid = Math.round(l+(h-l)/2);
    if (arr[mid]==n){
      return mid;
    }
    else if (arr[mid]>n){
      return binary(arr,n,l,mid-1);
    }
    else if (arr[mid]<n){
      return binary(arr,n,mid,h);
    }
  }
  function exp(arr,n,l,h){
    if (arr[0]==n){
      return 0;
    }
    i=1;
    while (arr[i]<n){
      i*=2;
      console.log(i);
    }
    return binary(arr,n,i/2,Math.min(i,arr.length-1));
  }
  return exp(arr,n,l,h);
}

var arr = [1,5,7,14,22,45,67,88,90,211,244,567];
var n = 211;
var l=0;
var h = arr.length-1
console.log("Index of the element is: "+exponential(arr,n,l,h));
