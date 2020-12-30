/*
* @param {number} number
* @param {number} bitPosition - zero based
* @param {number} bitValue - 0 or 1
* @return {number}
*/
const prompt = require('prompt-sync')();
//const number = Number(prompt());
//const bitPosition = Number(prompt());
//const bitValue = Number(prompt());

const updateBit = (number, bitPosition, bitValue) =>{
    const bitValueNormalized = bitValue ? 1:0;

    const clearMask = ~(1<<bitPosition);

    return (number & clearMask) | (bitValueNormalized << bitPosition);
} 

//console.log(updateBit(number, bitPosition, bitValue));

export default updateBit;