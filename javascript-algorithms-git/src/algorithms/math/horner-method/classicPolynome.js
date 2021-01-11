/**Returns the evaluation of a polynomial function at a certain point
 * Apprroach 1: Straight forward approach with powers.
 * @param{number[]} - coeffecients - i.e [4, 3, 2] for (4 * x^2 + 3 * x + 2)
 * @param{number} - xVal
 * @returns {number}
 */

import prompt from 'prompt-sync';

let inputString = prompt()();// Gets the input values as string
let coeffecients = inputString.split(","); // Convert the String with comma sperated values as array
coeffecients = coeffecients.map(Number);// Map all the array coefficients as Number
const XVal = Number(prompt()());
const classicPolynome = (coeffecients, XVal) => {
    return coeffecients.reverse().reduce(
        (accumulator, currentCoeffecient, index)=>{
        return accumulator + currentCoeffecient * (XVal ** index);
    }
    ,0
    );    
}

console.log(classicPolynome(coeffecients, XVal));
//console.log(classicPolynome([8], 0.1));