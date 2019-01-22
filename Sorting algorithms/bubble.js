function bubble(arr){
  for(i=0;i<=arr.length-1;i++){
    for (j=0;j<=arr.length-1;j++){
      if (arr[j]>arr[j+1]){
        [[arr[j]],[arr[j+1]]]=[[arr[j+1]],[arr[j]]];
      }
      else{
        continue;
      }
    }
  }
  return arr;
}
  
var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
var l = 0;
var h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+bubble(arr,l,h));
