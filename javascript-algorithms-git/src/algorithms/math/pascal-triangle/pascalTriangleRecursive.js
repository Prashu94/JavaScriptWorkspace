/**Pascal Triangle Recursive
 * @param{number} - lineNumber
 * @return{number[]}
 */

import prompt from 'prompt-sync';

//const lineNumber = Number(prompt()());

const pascalTriangle = (lineNumber) => {
    if(lineNumber === 0){
        return [1];
    }

    const currentLine = [];

    const currentLineSize = lineNumber + 1;
    const previousLineSize = currentLineSize - 1;

    const previousLine = pascalTriangle(lineNumber - 1);

    for(let numIndex = 0; numIndex < currentLineSize ; numIndex+=1){
        const leftCoeffecient = (numIndex - 1) >= 0 ? previousLine[numIndex-1]:0;
        const rightCoeffecient = numIndex < previousLineSize ? previousLine[numIndex]:0;
        currentLine[numIndex] = leftCoeffecient+ rightCoeffecient;
    }

    return currentLine;
}

console.log(pascalTriangle(7));
export default pascalTriangle;