/**isPowerOfTwoBitwise is to get the result of the number being poer of two or not using the bitwise
 * @param{number} number
 * @returns{boolean}
 */

import prompt from 'prompt-sync';

const number = Number(prompt()());

const isPowerOfTwo = (number) => {
    if(number < 1){
        return false;
    }

    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(number));
export default isPowerOfTwo;