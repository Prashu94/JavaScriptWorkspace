/**Convert from Radian to Degree
 * @param{number} radian
 * @returns{number}
 */
import prompt from 'prompt-sync';

//const radian = Number(prompt()());

const radianToDegree = (radian) => {
    return radian * (180 / Math.PI);
}
//console.log(radianToDegree(radian));
export default radianToDegree;