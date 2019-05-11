function getStrToLower(str) {
  var arr = str.split(' ');
  var rslt=[];
  arr[0]=arr[0].toLowerCase();
    for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1).toLowerCase();
  }
  return arr.join('')
}
module.exports=getStrToLower