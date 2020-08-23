// Write a function to clearBit to shift 1 by bitPosition and then invert the bits and perfomr AND operation
/**
 * @param{number} number
 * @param{number} bitPosition
 * @return{number}
 */

 const clearBit = (number, bitPosition) =>{
     const mask = ~(1<<bitPosition);

     return number & mask;
 }

 module.exports = clearBit;