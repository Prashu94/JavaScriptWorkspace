/**Find all the prime numbers up to a limit n
 * @param{number} maxNumber
 * @returns {number[]}
 */

import prompt from 'prompt-sync';

const maxNumber = Number(prompt()());

const sieveOfEratosthenes = (maxNumber) => {

    const isPrime = new Array(maxNumber+1).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    const primes = [];

    for(let number=2; number <= maxNumber; number+=1){

        if(isPrime[number] === true){
            primes.push(number);


            let nextNumber = number*number;

            while(nextNumber <= maxNumber){
                isPrime[nextNumber] = false;
                nextNumber+=number;
            }
        }
    }

    return primes;
}

console.log(sieveOfEratosthenes(maxNumber));
export default sieveOfEratosthenes;