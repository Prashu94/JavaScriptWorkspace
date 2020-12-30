/**
 * @param{number} number
 * @returns{number}
 */

const prompt = require('prompt-sync')();
//const number = Number(prompt());

const isEven = (number) => {
    return (number & 1)===0;
}

export default isEven;
//console.log(isEven(number));