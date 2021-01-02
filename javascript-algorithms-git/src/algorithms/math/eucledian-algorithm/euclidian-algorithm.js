/**Recursive version of Eucledian Algorithm of finding GCD
 * @param{number} originalA
 * @param{number} originalB
 * @returns {number}
 */

import prompt from 'prompt-sync';

const originalA = Number(prompt()());
const originalB = Number(prompt()());

const eucledianAlgorithm = (originalA, originalB) =>{

    // Convert the number to positive
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    return (b===0)? a :eucledianAlgorithm(b, a%b);

}

console.log(eucledianAlgorithm(originalA, originalB));

export default eucledianAlgorithm;