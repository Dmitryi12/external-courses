function showTypeArg (arg) {
	var rslt;
  if (typeof arg === "number" && !isNaN(arg)) {
  	rslt = "number";
} 
else if (typeof arg === "string") {
	rslt = "string";
} 
  return rslt}
module.exports=showTypeArg