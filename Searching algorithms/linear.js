function linear(arr,n){
  for(i=0;i<=arr.length-1;i++){
    if(arr[i]==n){
      return i
    }
    else{
      continue
    }
  }
}
var arr=[1,5,6,8,12,16,17,26,44,70];
var n=8;
console.log("Your element is: "+ linear(arr,n));
