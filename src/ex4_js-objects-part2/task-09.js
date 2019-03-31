function getStrngAfterNumber(strng, strngToAdd, number) {
	var strngArr = strng.split(" ");
	strngArr.splice(number+1, 0, strngToAdd);
	var newStrng = strngArr.join(" ");
	return newStrng
}
module.exports=getStrngAfterNumber