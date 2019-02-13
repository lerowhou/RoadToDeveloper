function ptt(arr,l,h){
  let piv = h;
  let j = 0;
  for (i=l;i<=h;i++){
    if(arr[i]<=arr[piv]){
      [[arr[i]],[arr[j]]]=[[arr[j]],[arr[i]]];
      j++;
    }
  }
  return arr;
}


var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
let l=0;
let h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+ptt(arr));
