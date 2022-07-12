const sumAll = function(num1,num2) {
    let ans = 0

    let start = null
    let end = null
    if (num1 < num2) {
        start = num1
        end = num2
    } else {
        start = num2
        end = num1
    }

    if (start < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR"
    } else {
        for (let i = start; i <= end; i++) {
            ans = ans + i
            
        }
        return ans
    }
    
};

// Do not edit below this line
module.exports = sumAll;
