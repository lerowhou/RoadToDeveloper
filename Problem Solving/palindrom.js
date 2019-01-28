function palindrom(s) {
  m = Math.round(((s.length-1)+0)/2);
  a=[];
  for(i=0;i<s.length;i++){
    if(s[i]==' '){
      continue;
    }
    else if (s[i]!=' ') {
      a.push(s[i]);
    }
  }
  let j = 0;
  let k = a.length-1
  while (j<=(a.length-1)/2 && k>=(a.length-1)/2) {
    if(a[j]==a[k]){
      console.log(a[j]+' = '+a[k]);
    }
    else {
      console.log(a[j]+' != '+a[k]);
      return 'This is not a palindrom';
    }
    j++;
    k--
  }
  return 'It is a palindrom!';
}
s = "a s s s a a s  s s a";
//s = "a s s s a s s s a";
console.log(palindrom(s));
console.log(s.length-1);
