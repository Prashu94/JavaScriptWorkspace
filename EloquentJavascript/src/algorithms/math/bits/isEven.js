// Write a function to calculate the if the given number is Even using bit operators
/**
 * @param{number} number
 * @returns{boolean}
 */

const isEven = (number) =>{
    return (number & 1) === 0;
}

module.exports= isEven;
