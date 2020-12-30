/**
 * @param{number} number
 * @returns{boolean}
 */
/*
const prompt = require('prompt-sync')();
const number = Number(prompt());
*/
const isPositive = (number) => {
    if(number === 0){
        return false;
    }

    return ((number >> 31) & 1) === 0;
};

//console.log(isPositive(number));

export default isPositive;