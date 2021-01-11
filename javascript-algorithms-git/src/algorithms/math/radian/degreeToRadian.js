/** Program to convert from degree to radian
 * @param{number} degree
 * @returns{number}
 */

import prompt from 'prompt-sync';

//const degree = Number(prompt()());

const degreeToRadian = (degree) => {
    return degree * Math.PI / degree;
} 

//console.log(degreeToRadian(degree));
export default degreeToRadian;