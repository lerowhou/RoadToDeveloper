function interpolation(arr,n,l,h){
  var pos = Math.round(l+((n-arr[l])*(h-l)/(arr[h]-arr[l])));
  while (l<h) {
    if(arr[pos]==n){
      return pos;
    }
    else if (arr[pos]<n) {
      return interpolation(arr,n,pos,h);
    }
    else if (arr[pop]>n) {
      return interpolation(arr,n,l,pos);
    }
  }
}

var arr=[1,5,6,8,12,16,17,26,44,70];
var n=5;
var l = 0;
var h = arr.length-1;
console.log("Your element is: "+ interpolation(arr,n,l,h));
