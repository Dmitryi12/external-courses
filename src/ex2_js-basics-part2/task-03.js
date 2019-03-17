var evenAndOdd = function (arr) {
  var funcn = [];
	var even =0, odd=0, zero = 0;
	  	for (var i = 0; i < arr.length; i++) {
	  	  if (typeof arr[i] === "number") {//для исключения null, да и впринципе всех значений (не чисел)
	  	  if (arr[i] === 0) {zero ++;}
		else if (arr[i] % 2 === 0) {even++;}
		else {odd++}}
	  }
	  funcn.push(even);
	  funcn.push(odd);
	  funcn.push(zero)
	return funcn
}
module.exports=evenAndOdd