import eucledianAlgorithm from '../eucledian-algorithm/euclidian-algorithm';
import prompt from 'prompt-sync';

const a = Number(prompt()());
const b = Number(prompt()());


const leastCommonMultiple = (a, b) => {
    return ((a===0) || (b === 0) ? 0 : Math.abs(a*b)/eucledianAlgorithm(a,b));
}

console.log(leastCommonMultiple(a,b));
export default leastCommonMultiple;