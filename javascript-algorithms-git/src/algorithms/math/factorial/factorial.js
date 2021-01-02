/**Factorial simple
 * @param{number} number
 * @returns{number}
 */

import prompt from 'prompt-sync'

//const number = Number(prompt()());
const factorial = (number) =>{
    let result  = 1;
    for(let i = 2; i<= number; i+=1){
        result *= i;
    }
    return result;
}
//console.log(factorial(number))
export default factorial