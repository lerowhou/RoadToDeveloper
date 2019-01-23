function merge(arr,l,r){
  if (r>l){
    m = Math.round((l+r)/2);
  }
}


var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
var l=0;
var h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+merge(arr,l,h));
