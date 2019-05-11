function likeMap(array, callback){
 var result=[];
  array.forEach(function(item, i, array){    
     result.push(callback(item, i, array));
  })
  return result;
}
module.exports=likeMap