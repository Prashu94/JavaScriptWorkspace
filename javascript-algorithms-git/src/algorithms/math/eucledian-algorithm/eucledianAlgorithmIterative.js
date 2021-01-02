/**Recursive version of Eucledian Algorithm of finding GCD
 * @param{number} originalA
 * @param{number} originalB
 * @returns {number}
 */

import prompt from 'prompt-sync';

const originalA = Number(prompt()());
const originalB = Number(prompt()());

const eucledianAlgorithmIterative = (originalA, originalB) => {

    let a = Math.abs(originalA);
    let b = Math.abs(originalB);


    while(a&&b && a!==b){

        [a, b] = a > b? [a - b, b] : [a, b-a];

    }

    return a||b;

}

console.log(eucledianAlgorithmIterative(originalA, originalB));
export default eucledianAlgorithmIterative;