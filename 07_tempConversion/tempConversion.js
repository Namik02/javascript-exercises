const ftoc = function(num) {
  newNum = (num-32)*0.5556
  newNum = parseFloat(newNum.toFixed(1))
  return newNum

};

const ctof = function(num) {
  newNum = (num*1.8)+32
  newNum = parseFloat(newNum.toFixed(1))
  return newNum
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
