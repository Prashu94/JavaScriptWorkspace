/**Calculate the fibonacci number using the specific position using the Closed form(Binet's Formula)
 * @param {number}
 * @returns number
 */

import prompt from 'prompt-sync';

const position = Number(prompt()());

const fibonacciClosedForm = (position) => {
    const topMaxValidation=70;

    // Check if the position is valid
    if(position < 1 || position > topMaxValidation){
        throw new Error(`Can't handle the position smaller than or grreater than ${topMaxValidationPosition}`)
    }

    // Calculate the root 5
    const sqrt5 = Math.sqrt(5);

    // Calcualting the constant
    const phi = (1+ sqrt5) / 2;

    // Calculate the fibonacci number using the Binet's formula
    return Math.floor((phi * position) / sqrt5 + 0.5);
}

console.log(fibonacciClosedForm(position));

export default fibonacciClosedForm;