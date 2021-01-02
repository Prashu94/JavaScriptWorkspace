import multiplyByTwo from './multiplyByTwo';
import divideByTwo from './divideByTwo';
import isEven from './isEven';
import isPositive from './isPositive';
import prompt from 'prompt-sync';

/**
 * @param{number} a
 * @param{number} b
 * @returns{number}
 */
/*
const a = Number(prompt()());
const b = Number(prompt()());*/
const multiply = (a, b) => {
    // If a is 0 or b is 0 or if both a and b are zeros then the production is also 0
    if(b===0 || a===0){
        return 0;
    }

    // Otherwise we will have 4 different cases that are described above
    const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b-1))+a;
    const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b+1))-a;

    const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
    const multiplyByOdd = () => (isPositive(b) ? multiplyByOddPositive():multiplyByOddNegative()); 


    return isEven(b) ? multiplyByEven() : multiplyByOdd();
};

//console.log(multiply(a, b));

export default multiply;