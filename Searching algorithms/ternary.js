function ternary(arr,n,l,h) {
  if(arr[l]>n || arr[arr.length]<=n){
    return -1;
  }
  m1 = l+(r-l)/3;
  m2 = m1+(r-l)/3
  if(arr[m1]==n){
    return m1;
  }
  else if(arr[m2]==n){
    return m2;
  }
  else if(n<arr[m1]){
    console.log(arr[m1-1]);
    return ternary(arr,n,l,m1);
  }
  else if(arr[m1]<n<arr[m2]){
    console.log(arr[m1+1]+ " and "+ arr[m2-1]);
    return ternary(arr,n,m1+1,m2-1);
  }
  else if(arr[m2]<n){
    console.log(arr[m2+1]);
    return ternary(arr,n,m2,h);
  }
}




var arr=[1,5,6,8,12,16,17,26,44,70];
var n=5;
var l = 0;
var r = arr.length-1;
console.log("Your element is: "+ ternary(arr,n,l,r));
