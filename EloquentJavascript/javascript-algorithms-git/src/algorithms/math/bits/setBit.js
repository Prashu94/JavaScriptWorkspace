const prompt = require('prompt-sync')();
//const number = Number(prompt());
//const bitPosition = Number(prompt());
function setBit(number, bitPosition){
    return number | (1<<bitPosition);
}
//console.log(setBit(number, bitPosition));
export default setBit;