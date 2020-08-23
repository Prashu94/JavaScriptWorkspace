// Write a function to check whether the given number
/**
 * @param{number}
 * @returns{boolean}
 */

const isPositive = (number) =>{
    // If number is zero it is neither positive or negative
    if(number === 0){
        return false;
    }

    // Shift the significant 32 bit AND the same to check if the number is positive 
    return ((number >> 31) & 1)===0;
}

module.exports = isPositive;