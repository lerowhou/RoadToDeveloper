function selection(arr){
  for(i=0;i<=arr.length-1;i++){
    for(j=i+1;j<=arr.length-1;j++){
      if(arr[i]<arr[j]){
        continue;
      }
      else{
        [[arr[i]],[arr[j]]]=[[arr[j]],[arr[i]]];
      }
    }
  }
  return arr;
}

var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+selection(arr));
