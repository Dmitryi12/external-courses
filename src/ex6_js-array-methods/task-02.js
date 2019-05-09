function likeSome(array, callback){
 var result = false;
  array.forEach(function(item, i, array){    
   if (callback(item, i, array)===true) {result = true;} 
  })
  return result;
}
module.exports=likeSome