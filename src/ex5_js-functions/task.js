var result = 0;
var Calculator = {
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
 reset: function reset() {
    result=0
    return result;
  },
  getResult: function rslt() {
    return result
  }
}
module.exports=Calculator