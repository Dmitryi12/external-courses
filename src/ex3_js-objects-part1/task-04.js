function checkNAddProperty(strng, obj) {
	 	var newObj = obj;	
	 	for (var key in obj){
	 	if (key !== strng) {newObj[strng] = 'new'}
	 	} 	 return newObj
}
module.exports=checkNAddProperty