/** isPowerOfTwo using normal division method
 * @param{number} number
 * @returns{boolean}
 */

import prompt from 'prompt-sync';

const number = Number(prompt()());

const isPowerOfTwo = (number) => {
    if(number < 1){
        return false;
    }

    let divideNumber = number;
    while(divideNumber!==1){

        if(divideNumber%2!==0){
            return false;
        }

        divideNumber/=2;
    }
    return true;
}

console.log(isPowerOfTwo(number));
export default isPowerOfTwo;