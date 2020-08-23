// Create a method to shift 1 over by bitPosition bits, creating a value that looks like 00100. Then we perform OR opertation
// that sets specific bit into 1 but it does not affect on other bits of the number.

/**
 * @param{number} number
 * @param{number} bitPosition
 * @return{number}
 */

function setBit  (number, bitPosition) {
     return number | (1 <<bitPosition);
}

module.exports = setBit;