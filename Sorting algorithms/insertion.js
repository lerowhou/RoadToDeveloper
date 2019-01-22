function insertion(arr,l,h){
  for(i=l;i<=h;i++){
    for(j=i;h>=0;j--){
      if(arr[j]<arr[j-1]){
        [[arr[j]],[arr[j-1]]]=[[arr[j-1]],[arr[j]]];
      }
      else {
        break;
      }
    }
  }
  return arr;
}

var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
var l=0;
var h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+insertion(arr,l,h));
