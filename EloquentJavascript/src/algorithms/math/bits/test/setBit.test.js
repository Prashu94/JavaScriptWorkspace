var expect = require('chai').expect;

var setBit = require('../setBit');

describe('setBit', ()=>{
    it(`should set bit at specific position`, () =>{
        //1 = 0b0001
        expect(setBit(1, 0)).to.equal(1);
        expect(setBit(1,1)).to.equal(3);
        expect(setBit(1,2)).to.equal(5);

        //10 = 0b1010
        expect(setBit(10,0)).to.equal(11);
        expect(setBit(10,1)).to.equal(10);
        expect(setBit(10,2)).to.equal(14);
    })
})