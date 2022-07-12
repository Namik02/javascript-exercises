const removeFromArray = function(arr,...num) {
    const newArr = []
    let p = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (!num.includes(arr[i])) {
            newArr[p] = arr[i]
            p++
        }
        
    }

    

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
