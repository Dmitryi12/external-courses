function checkingObjctToStrg (strg, obj) {
	var rslt;
	var arg=strg;
	for (var key in obj) { 
		if (arg === key) {rslt=true;} 
			else {rslt=false}
	} return rslt
}
module.exports=checkingObjctToStrg