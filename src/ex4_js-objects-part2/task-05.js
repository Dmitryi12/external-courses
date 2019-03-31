function showStrng2InStrng1(strng1, strng2) {
	var rslt;
	if (~strng1.indexOf(strng2)) {rslt = true} 
	else {rslt=false}
	 return rslt
	}
module.exports=showStrng2InStrng1