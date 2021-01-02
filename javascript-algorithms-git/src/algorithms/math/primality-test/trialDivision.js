/**
 * Primality Test
 * @param{number} number
 * @returns {boolean}
 */

import prompt from 'prompt-sync'

const number = Number(prompt()());

const trialDivision  = (number) => {
    // Check if the number is integer
    if(number % 1 !== 0){
        return false;
    }

    // Number less than 1 are not prime, hence exclude the same
    if(number <=1 ){
        return false;
    }

    // All numbers from 2 and 3 are prime
    if(number<=3){
        return true;
    }

    // If the number is not divided by 2 then we need to eliminate further
    if(number % 2 === 0){
        return false;
    }

    // If there is no dividers upto sqrt(number) then there are no dividers above that number too.
    for(let divider = 3; divider <= Math.sqrt(number); divider+=2){
        if(number % divider === 0){
            return false;
        }
    }
    return true;
};

console.log(trialDivision(number));

export default trialDivision;
