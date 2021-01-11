import prompt from 'prompt-sync';

let inputString = prompt()();
let shape = inputString.split(",");
shape = shape.map(Number);
let fill = Number(prompt()());

/**Generate Matrix of specif shape with specific values */
const generate = (mShape, fill) => {

    const generateRecursively = (recShape, recIndices) => {
        if (recShape.length === 1) {
          return Array(recShape[0])
            .fill(null)
            .map((cellIndex) => fill([...recIndices, cellIndex]));
        }
        const m = [];
        for (let i = 0; i < recShape[0]; i += 1) {
          m.push(generateRecursively(recShape.slice(1), [...recIndices, i]));
        }
        return m;
    };
    
    return generateRecursively(mShape, []);
}

/**Generate matrix of zeros of specified shape
 * 
 */


console.log(generate(shape, ()=>fill));
export default generate;