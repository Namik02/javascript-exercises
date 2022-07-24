const findTheOldest = function(array) {
    array.sort(function(a,b) {
            const currentDate =  new Date().getFullYear()
        const lastGuy = ((a.yearOfDeath !== undefined) ? a.yearOfDeath : currentDate) - a.yearOfBirth
        const nextGuy = ((b.yearOfDeath !== undefined) ? b.yearOfDeath : currentDate) - b.yearOfBirth
        return lastGuy > nextGuy ? -1 : 1

    })
    return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
