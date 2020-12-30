const prompt = require('prompt-sync')();
//const number = Number(prompt())
//const bitPosition = Number(prompt())
function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}
//console.log(getBit(number, bitPosition));
export default getBit