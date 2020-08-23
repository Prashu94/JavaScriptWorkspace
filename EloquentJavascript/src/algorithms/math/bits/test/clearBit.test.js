var expect = require('chai').expect;

var clearBit = require('../clearBit');

describe('clearBit', ()=>{
    it(`should clear a bit at specific position`, ()=>{
        //1 = 0b0001
        expect(clearBit(1, 0)).to.equal(0);
        expect(clearBit(1,1)).to.equal(1);
        expect(clearBit(1,2)).to.equal(1);

        //10 = 0b1010
        expect(clearBit(10, 0)).to.equal(10);
        expect(clearBit(10,1)).to.equal(8);
        expect(clearBit(10,3)).to.equal(2);
    })
})