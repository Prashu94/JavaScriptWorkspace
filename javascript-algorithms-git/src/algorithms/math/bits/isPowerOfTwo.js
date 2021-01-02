import prompt from 'prompt-sync'

//const number = Number(prompt()());

const isPowerTwo = (number) => {
    return(number & (number-1)) === 0;
}

//console.log(isPowerTwo(number));
export default isPowerTwo;