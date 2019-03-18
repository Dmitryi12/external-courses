function dtypes (arg) {
	var rslt
  if (typeof arg === "number" && isNaN(arg)===false) {(rslt = "number");
} else if (typeof arg === "string") {(rslt = "string");
} else {(rslt = undefined)}
  return (rslt)}
module.exports=dtypes
