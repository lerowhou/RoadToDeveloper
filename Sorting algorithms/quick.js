function quick(arr,l,h){
  function parti(arr,l,h){
    var j=l;
    var piv = h;
    for(i=l;i<piv;i++){
      if(arr[i]<=arr[piv]){
        [[arr[i]],[arr[j]]]=[[arr[j]],[arr[i]]];
        j++;
      }
      else{
        continue;
      }
    }
    [[arr[piv]],[arr[j]]]=[[arr[j]],[arr[piv]]];
    console.log("The array is :"+arr);
    console.log("The pivot is :"+arr[j]);
    return j;
  }
  function sort(arr,l,h){
    if(l<h){
      var p = parti(arr,l,h);
      sort(arr,p+1,h);
      sort(arr,l,p-1);
    }
  }
  sort(arr,l,h);
  return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var arr = [456,23,888,123,34,33,1,0,45,99,320,50];
var l=0;
var h = arr.length-1;
console.log("Here is unsort array: "+arr);
console.log("Here is sorted array: "+quick(arr,l,h));
