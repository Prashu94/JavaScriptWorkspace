/** Returns the evaluation of a polynomila function at a certain point
 * Uses Horner's Rule
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
        (accumulator, currentCoeffecient)=>{
        return accumulator * XVal + currentCoeffecient;
    }
    ,0
    );    
}

console.log(classicPolynome(coeffecients, XVal));