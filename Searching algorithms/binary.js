function binary(arr,n,l,r){
  if (arr[0]>n || arr[arr.length-1]<n){
    return false;
  }
  mid = Math.round(l+(r-l)/2);
  if(arr[mid]==n){
    return mid;
  }
  else if (arr[mid]>n) {
    return binary(arr,n,0,mid-1);
  }
  else if (arr[mid]<n) {
    return binary(arr,n,mid+1,r);
  }
  return mid;
}
var arr=[1,5,6,8,12,16,17,26,44,70];
var n=8;
var l = 0;
var r = arr.length-1;
console.log("Your element is: "+ binary(arr,n,l,r));
