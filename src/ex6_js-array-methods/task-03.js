function likeEver(array, callback){
 var result=true;
  array.forEach(function(item, i, array){    
   if (!callback(item, i, array)) {result=false;}
  })
  return result;
}
module.exports=likeEver