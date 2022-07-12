const reverseString = function(str) {
    let l = str.length - 1
    let a = str.split('')
    let newStr = ''
    for (let i = l; i > -1; i--) {
       newStr = newStr + a[i]
    }
    return newStr

};

// Do not edit below this line
module.exports = reverseString;
