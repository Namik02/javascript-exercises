const fibonacci = function(num) {
    let n0 = 0
    let n1 = 1
    let result = 0 
    if (num > 1) {
        for (let i = 2; i <= num; i++) {
            result = n0 + n1
            n0 = n1
            n1 = result
        } 
    } else if (num < 0) {
        result = "OOPS"
    } else if (num = 0) {
        result = n0
    } else if (num = 1) {
        result = n1
    }
    
    return result
};

// Do not edit below this line
module.exports = fibonacci;
