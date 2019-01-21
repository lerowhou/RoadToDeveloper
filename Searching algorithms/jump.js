function jump(arr,n,l,r){
  function linear(arr,n,l,r){
    for(i=l;i<=r;i++){
      if(arr[i]==n){
        return i;
      }
      else{
        continue;
      }
    }
  }
  function step(arr,n,l,r){
    step = Math.round(Math.sqrt(arr.length-1));
    var i=0;
    while (i<=arr.length-1){
      if (arr[i]==n){
        return i;
      }
      else if (arr[i]<n) {
        i+=step;
      }
      else if (arr[i]>n) {
        return linear(arr,n,i-step,i)
      }
    }
  }
  return step(arr,n,l,r);
}

var arr=[1,5,6,8,12,16,17,26,44,70];
var n=70;
var l = 0;
var r = arr.length-1;
console.log("Your element is: "+ jump(arr,n,l,r));
