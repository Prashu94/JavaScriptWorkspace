/**  First Object Oriented programming langauge for Operations on Complex Numbers
 * 
*/

import radianToDegree from '../../math/radian/radianToDegree.js'


class ComplexNumber {
    /**
     * @param{number}- re=> real number
     * @param{numner}- im=> imaginary number
     */
    constructor({re=0, im=0} = {}){
        this.re = re;
        this.im = im;
    }

    /** Adding to Complex numbers
     * @param{ComplexNumber|number} addend
     * @return{ComplexNumber} 
     */
    add = (addend) =>{
        // To ensure if the addend object is a ComplexNumber
        const complexAddend = this.toComplexNumber(addend);

        // return the added complex numbers
        return new ComplexNumber({
            re: this.re + complexAddend.re,
            im: this.im + complexAddend.im
        });

    }

    /** Subtracting Complex Numbers 
     * @param{ComplexNumber|number} subtrahend
     * @returns{ComplexNumber}
    */
   subtract = (subtrahend) => {
       // To ensure if the subtrahend object is a Complex Number
       const complexSubtrahend = this.toComplexNumber(subtrahend);

       // return the subtracted complex numbers
       return new ComplexNumber({
           re: this.re - complexSubtrahend.re,
           im: this.im - complexSubtrahend.im
       });
   }

   /** Multiplying Complex Numbers
    * @param{ComplexNumber|number} multiplicand
    * @returns{ComplexNumber}
    */
   multiply = (multiplicand) => {
       // To ensure if the multiplicand is a Complex Number
        const complexMultiplicand = this.toComplexNumber(multiplicand);
       // return the complex number
       return new ComplexNumber({
           re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
           im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re
       });
   }

   /** Division of Complex Number
    * @param{ComplexNumber|number} divider
    * @returns{ComplexNumber}
    */

    divide = (divider) => {
        const complexDivider = this.toComplexNumber(divider);

        // Get the cojugate of the divider
        const dividerConjugate = this.conjugate(complexDivider);

        // Multiply the dividend by the divider's conjugate
        const finalDivident = this.multiply(dividerConjugate);

        // Calculate final divider using the formula (a+bi)(a-bi) = a^2 + b^2
        const finalDivider = (complexDivider.re ** 2) + (complexDivider.im ** 2);

        return new ComplexNumber({
            re:finalDivident.re / finalDivider,
            im:finalDivident.im / finalDivider
        });
    }

   /** Conjugate of imaginary number
    * @param{ComplexNumber|number} number
    */
   conjugate = (number) =>{
       const complexNumber = this.toComplexNumber(number);

       return new ComplexNumber(
           {
               re:complexNumber.re,
               im:-1*complexNumber.im
           }
       );
   }

   /**Get the radius */
   getRadius = () => {
       return Math.sqrt((this.re**2)+(this.im**2));
   }

   /**Getting the phase 
    * @param{boolean} [inRadians]
    * @returns{number}
   */

   getPhase = (inRadians = true) => {
    let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

    if (this.re < 0 && this.im > 0) {
      phase = Math.PI - phase;
    } else if (this.re < 0 && this.im < 0) {
      phase = -(Math.PI - phase);
    } else if (this.re > 0 && this.im < 0) {
      phase = -phase;
    } else if (this.re === 0 && this.im > 0) {
      phase = Math.PI / 2;
    } else if (this.re === 0 && this.im < 0) {
      phase = -Math.PI / 2;
    } else if (this.re < 0 && this.im === 0) {
      phase = Math.PI;
    } else if (this.re > 0 && this.im === 0) {
      phase = 0;
    } else if (this.re === 0 && this.im === 0) {
      // More correctly would be to set 'indeterminate'.
      // But just for simplicity reasons let's set zero.
      phase = 0;
    }

    if(!inRadians){
        phase = radianToDegree(phase);
    }

    return phase;
   }

   /**Get the polar form
    * @param{boolean} [inRadians]
    * @returns{{radius: number, phase: number}}
    */
   getPolarForm=({inRadians = true}) => {
       return {
           radius: this.getRadius(),
           phase: this.getPhase(inRadians)
       }
   }
   /** */
    /**
     * Convert real numbers to complex numbers
     * In case if complex number is provided then it is left as it is.
     */
    toComplexNumber = (number) =>{
        if(number instanceof ComplexNumber){
            return number;
        }
        return new ComplexNumber({re:number});
    }
}

let first = new ComplexNumber({re:1, im:2});
let second = new ComplexNumber({re: 2, im:3});
console.log(first);
console.log(second);
console.log(first.add(second));
console.log(first.subtract(second));
console.log(first.multiply(second));
console.log(first.divide(second));
console.log(first.getPolarForm(false));
console.log(second.getPolarForm(true));