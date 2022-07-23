const palindromes = function (string) {
    newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    newString = [...newString];
    newString = newString.filter(i => i !==" ")
    newString = newString.
    newString = newString.map(i => i.toLowerCase())
    
     return newString.join('') === newString.reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
