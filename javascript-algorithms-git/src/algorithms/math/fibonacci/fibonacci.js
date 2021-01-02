/**Return a fibonacci sequence as an array
 * @param n
 * @returns {number[]}
 */

import prompt from 'prompt-sync'

const n = Number(prompt()());

const fibonacci = (n) => {

    let fibSequence = [1];

    let currentValue = 1;
    let previousValue = 0;

    if(n===1){
        return fibSequence;
    }

    let iterationCounter = n-1;

    while(iterationCounter){
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        
        fibSequence.push(currentValue);

        iterationCounter-=1;
    }

    return fibSequence;
}

console.log(fibonacci(n));

export default fibonacci;