var evenAndOdd = function (arr) {
	var even =0, odd=0, zero = 0;
	  	for (var i = 0; i < arr.length; i++) {
	  	  if (typeof arr[i] === "number") {//для исключения null, да и впринципе всех значений (не чисел)
	  	  if (arr[i] === 0) {zero ++;}
		else if (arr[i] % 2 === 0) {even++;}
		else {odd++}}
	  }
	return [even, odd, zero]
}
module.exports=evenAndOdd