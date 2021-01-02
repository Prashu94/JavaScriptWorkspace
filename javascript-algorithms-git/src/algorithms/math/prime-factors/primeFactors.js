/**Find Prime Factors of a number
 * @param {number} n -> the number that has to be split into prime factors
 * @returns {number[]} -> array of prime factors
 */

import prompt from 'prompt-sync'

const n = Number(prompt()());

const primeFactors = (n) => {
    // creating a copy of the parameter variable
    let nn = n;

    // Store the values of the quotient after division in the below array
    const factors = [];

    // Run the loop till sqrt(n) to optimize from O(n) to O(sqrt(n))
    for(let factor = 2; factor <= Math.sqrt(nn); factor+=1){
        if((nn % factor) === 0){
            nn /= factor;
            // save into array
            factors.push(factor);
        }
    }

    if(nn!==1){
        factors.push(nn);
    }

    return factors;
}

/**
 * Hardy Ramanujan approximation of prime factors count.
 * @param{number} n
 * @returns{number} -> approximate number of prime factors
 */

const hardyRamanujan = (n) =>{
    return Math.log(Math.log(n));
}

console.log(primeFactors(n));
console.log(hardyRamanujan(n));

export default {primeFactors, hardyRamanujan};