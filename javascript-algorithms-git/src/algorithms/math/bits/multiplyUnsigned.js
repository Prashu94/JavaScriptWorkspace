/**
 * Multiply 2 unsigned numbers using bitwise operators
 * @param{number} number1
 * @param{number} number2
 * @returns{number}
 */

import prompt from 'prompt-sync'

/*const number1 = Number(prompt()());
const number2 = Number(prompt()());*/
const multiplyByUnsigned = (number1, number2) => {
    let result = 0;

    // Assume multiplier as number2
    let multiplier = number2;
    
    // Multiplier current bit index
    let bitIndex = 0;

    // Go through all the bits of number2
    while(multiplier!==0) {
        // Check if current multiplier bit is set
        if(multiplier & 1){
            result+=(number1 << bitIndex);
        }
        bitIndex += 1;
        multiplier >>= 1;
    }
    return result;
}

//console.log(multiplyByUnsigned(number1, number2));

export default multiplyByUnsigned;