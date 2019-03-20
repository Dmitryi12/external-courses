var equalArr = function (arr) {
	var rslt;
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr.length; j++){
		   if (arr[i]===arr[j]&& i!==j) {rslt= true }
		   else if (arr[i]!==arr[j]&& i!==j) {rslt= false}
		}
	    } return rslt
}
module.exports=equalArr