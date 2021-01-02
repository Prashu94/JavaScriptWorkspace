/**
 * @param{number} originalNumber
 * @returns{number}
 */

import prompt from 'prompt-sync';
//const originalNumber = Number(prompt()());
const countSetBit = (originalNumber) => {
    let setBitsCount = 0;
    let number = originalNumber;

    while(number){
        setBitsCount+=number&1;
        number >>>= 1;
    }

    return setBitsCount;
}

//console.log(countSetBit(originalNumber));

export default countSetBit;