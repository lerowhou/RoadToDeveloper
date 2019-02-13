function ternary(arr,n,l,h) {
  if(arr[l]>n || arr[arr.length]<=n){
    console.log('-------1-------');
    console.log('arr[l]='+arr[l]);
    console.log('arr[h]='+arr[h]);
    console.log('---------------');
    return -1;
  }
  var m1 = l+(n-l)/3;
  var m2 = m1+(n-l)/3;

  if(arr[m1]==n){
    console.log('-------2-------');
    console.log('Here is arr[m1]='+arr[l]);
    console.log('---------------');
    return m1;
  }
  else if(arr[m2]==n){
    console.log('-------3-------');
    console.log('Here is arr[m2]='+arr[l]);
    console.log('---------------');
    return m2;
  }
  else if(arr[m1]<n<arr[m2]){
    console.log('-------4-------');
    console.log('arr[m1]='+arr[m1]);
    console.log('arr[m2]='+arr[m2]);
    console.log('---------------');
    return ternary(arr,n,m1+1,m2-1);
  }
  else if(n<arr[m1]){
    return ternary(arr,n,l,m1);
  }
  else if(arr[m2]==n){
    return ternary(arr,n,m2,h);
  }
}

var arr=[1,5,6,8,12,16,17,26,44,70];
var n=5;
var l = 0;
var r = arr.length-1;
console.log("Your element is: "+ ternary(arr,n,l,r));
