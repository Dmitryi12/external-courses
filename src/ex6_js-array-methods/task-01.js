function likeSlice(array, begin=0, end=array.length) {
  var resultArr=[]; var bgnArg=begin; var endArg=end;
    
    if(begin<0) {
      bgnArg=array.length+begin;
    }
    if(end<0) {
      endArg=array.length+end;
    }
    for(var i=bgnArg; i<endArg; i++) {
      resultArr.push(array[i]);
    }
   return resultArr;
}
module.exports=likeSlice