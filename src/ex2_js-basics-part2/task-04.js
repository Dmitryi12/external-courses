var f=0;
var equalarr = function (arr) {
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr.length; j++){
		   if (arr[i]===arr[j]&& i!==j) {f= true }
		   else if (arr[i]!==arr[j]&& i!==j) {f= false}
		}
	    } return f
}
module.exports=equalarr