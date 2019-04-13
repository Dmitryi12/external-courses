function likeSome(array, callback){
 var result;
  array.forEach(function(item, i, array){    
   if (callback(item, i, array)===true) {result = true;} 
   else {result = false;}
  })
  return result;
}
module.exports=likeSome