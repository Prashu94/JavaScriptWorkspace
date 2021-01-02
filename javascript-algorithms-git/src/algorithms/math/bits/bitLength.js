/**Return the number of bits used in the binary representation of the number
 * @param{number} number
 * @returns{number}
 */

import prompt from 'prompt-sync'

//const number = Number(prompt()());
const bitLength = (number) => {
    let bitsCounter = 0;

    while ((1 << bitsCounter) <= number) {
        bitsCounter += 1;
    }

    return bitsCounter;
}

//console.log(bitLength(number));

export default bitLength;