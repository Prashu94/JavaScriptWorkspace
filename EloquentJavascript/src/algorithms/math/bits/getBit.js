/**
 * Method to shift the relevant bit to the zeroth position and then perform the AND operation
 * @param {number} number
 * @param {number} bitPosition
 * @return {number}
 */
//let prompt = require('prompt-sync')();

//const number = prompt("Enter the number")
function getBit(number, bitPosition){
    return (number >> bitPosition)&1;
}

module.exports = getBit;

