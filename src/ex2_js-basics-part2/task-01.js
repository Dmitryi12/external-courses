function typesofa (a) {
	var b
    if (isNaN(a)) {b = undefined}
    else if (typeof a === "number") {(b = "number");
} else if (typeof a === "string") {(b = "string");
} else {(b = undefined)}
  return (b)}
module.exports=typesofa


