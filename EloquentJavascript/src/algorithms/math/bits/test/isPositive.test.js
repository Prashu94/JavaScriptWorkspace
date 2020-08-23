var expect = require('chai').expect;
var isPositive = require('../isPositive');

describe('isPositive', ()=>{
    it("should detect if a number is positive", ()=>{
        expect(isPositive(1)).to.equal(true);
        expect(isPositive(2)).to.equal(true);
        expect(isPositive(3)).to.equal(true);
        expect(isPositive(565)).to.equal(true);
        expect(isPositive(564556)).to.equal(true);
        
        expect(isPositive(0)).to.equal(false);

        expect(isPositive(-2)).to.equal(false);
        expect(isPositive(-20)).to.equal(false);


    });
});