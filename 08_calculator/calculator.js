const add = function(num1, num2) {
	const result = num1 + num2
  return result 
};

const subtract = function(num1, num2) {
	const result = num1 - num2
  return result
};

const sum = function(array) {
  let result = 0
	array.forEach(num => result+=num);
  return result
};

const multiply = function(array) {
  let result = 1
	array.forEach(num => result*=num);
  return result
}
const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
  let result = 1
	for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
