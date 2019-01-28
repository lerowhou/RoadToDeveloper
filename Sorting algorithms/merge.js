function mergeSort(arr,l,r){
  if(l<r){
    let m = l+(r-l)/2;
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
  }
  function merge(arr,l,m,r){
    let p=l,
        q=m+1,
        k=0
        arr;
    for(let i = l; i<=r;i++){
      if (p>m){
        arr[k++]=arr[q++];
      }
      else if(q>r){
        arr[k++]=arr[p++];
      }
      else{
        arr[k++]=arr[q++];
      }
    }
    return arr;
  }
}

var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
var l=0;
var h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+mergeSort(arr,l,h));
