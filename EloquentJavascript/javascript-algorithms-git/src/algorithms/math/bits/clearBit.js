const prompt = require('prompt-sync')();
//const number = Number(prompt());
//const bitPosition = Number(prompt());
let bitMask;
function clearBit(number, bitPosition){
    bitMask = ~(1<<bitPosition);
    return (number & bitMask);
}
//console.log(clearBit(number, bitPosition));
export default clearBit;