/**Factorial recursive
 * @param{number} number
 * @returns{number}
 */

import prompt from 'prompt-sync'

//const number = Number(prompt()());
const factorial = (number) =>{
    return number > 1? number * factorial(number-1):1;
}
//console.log(factorial(number));
export default factorial;