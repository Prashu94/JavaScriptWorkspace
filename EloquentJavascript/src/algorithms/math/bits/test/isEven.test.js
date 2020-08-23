let expect = require('chai').expect;
let isEven = require('../isEven');

describe('isEven', ()=>{
    it(`should detect if the given number is even`, () => {
        expect(isEven(0)).to.equal(true);
        expect(isEven(1)).to.equal(false);
        expect(isEven(2)).to.equal(true);
        expect(isEven(-20)).to.equal(true);
        expect(isEven(145)).to.equal(false);
        expect(isEven(14)).to.equal(true);
        expect(isEven(15)).to.equal(false);
        expect(isEven(45)).to.equal(false);
        expect(isEven(40)).to.equal(true);
    });
});