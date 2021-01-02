/**
 * @param{number} numberA
 * @param{number} numberB
 * @returns{number}
 */

import prompt from 'prompt-sync';
import countSetBit from './countSetBit';

//const numberA = Number(prompt()());
//const numberB = Number(prompt()());

const bitDiff = (numberA, numberB) => {
    return(countSetBit(numberA ^ numberB));
}

//console.log(bitDiff(numberA, numberB));
export default bitDiff