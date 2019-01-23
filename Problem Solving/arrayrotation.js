function rotate(arr){
  var qwe=[];
  for(i=arr.length;i>0;i--){
    qwe.push(i);
  }
  return qwe;
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(arr);
console.log(rotate(arr));
