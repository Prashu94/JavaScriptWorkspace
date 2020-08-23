/**
 * Import all the functions
 */

let multiplyByTwo = require('../bits/multipleByTwo');
let divideByTwo = require('../bits/divideByTwo');
let isEven = require('../bits/isEven');
let isPositive = require('../bits/isPositive');


/**
 * Multiply 2 signed integers using bitwise operations
 * 
 * If a/b is zero or if both are zeros:
 * multiply(a,b)
 * 
 * If b is even:
 * multiply(a,b)= multiply(2a, b/2)
 * 
 * If b is odd and b is positive
 * multiply(a,b) = multiply(2a, (b-1)/2)+a
 * 
 * If b is odd and b is negative
 * multiply(a,b) = multiply(2a, (b+1)/2)+a
 */


const multiply  = (a, b) =>{
    // If a or b is zero of a and b are both zero
    if(a === 0 || b === 0){
        return 0;
    }


    // Otherwise we will have different cases that are descirbed above
    const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
    const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

    const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
    const multiplyByOdd = () => (isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative());

    return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

module.exports=multiply;