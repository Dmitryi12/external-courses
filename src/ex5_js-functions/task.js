function calculator () { 
var result=0;
	return{
  add: function add(number) {
    if (!isNaN (number)){
    result+=number;}
    return add;
  },
  subtract: function subtract(number) {
    if (!isNaN (number)){
    result-=number;}
    return subtract;
  },
  divide: function divide(number) {
    if (!isNaN (number)&&number!==0){
    result/=number;}
    return divide;
  },
  multiply: function multiply(number) {
    if (!isNaN (number)){
    result*=number;}
    return multiply;
  },
 getResult: function rslt() {
  	return result 
  },
  reset: function reset() {
    result=0
    return reset;
  }
}
}
var Calculator= new calculator();
module.exports=Calculator