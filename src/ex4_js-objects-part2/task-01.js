var obj = Object.create ({});
function findInProto(strng, obj) {
		var rslt;
		if (!obj.hasOwnProperty (strng)) {rslt = obj[strng]}
		return rslt
	}
module.exports=findInProto