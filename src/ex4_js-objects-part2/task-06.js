function getStrToUpper(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1).toLowerCase();
  }
  return arr.join(' ');
}
module.exports=getStrToUpper