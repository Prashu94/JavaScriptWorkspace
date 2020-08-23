// Write a function to update the bit
/**
 * @param{number} number
 * @param{number} bitPosition - zero based
 * @param{number} bitValue - 0 or 1
 * @return{number}
 */

 const updateBit = (number, bitPosition, bitValue) => {

    // Normalized bit value
    const bitValueNormalized = bitValue ? 1:0;

    // Init clear mask
    const clearMask = ~(1<<bitPosition);

    // Clear the bit value and then set it up to required value
    return (number & clearMask) | (bitValueNormalized << bitPosition);
 }

 module.exports = updateBit;