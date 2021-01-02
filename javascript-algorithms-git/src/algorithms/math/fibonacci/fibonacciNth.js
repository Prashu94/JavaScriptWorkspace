/**Calculate fibonacci number at a specific position using Dynamic Programming approach 
 * @param n
 * @returns {number}
*/

import prompt from 'prompt-sync'

const n = Number(prompt()());

const fibonacciNth = (n) => {
    let currentValue = 1;
    let previousValue = 0;

    if(n === 1){
        return 1;
    }

    let iterationCount = n-1;

    while(iterationCount){

        currentValue +=previousValue;
        previousValue = currentValue - previousValue;

        iterationCount-=1;
    }

    return currentValue;
}

console.log(fibonacciNth(n));

export default fibonacciNth;