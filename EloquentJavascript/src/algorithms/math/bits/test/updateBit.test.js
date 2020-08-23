var expect = require('chai').expect;
var updateBit = require('../updateBit');


describe('updateBit', ()=>{
    it('should update bit at specific position', () => {
        // 1 = 0b0001
        expect(updateBit(1,0,1)).to.equal(1);
        expect(updateBit(1,0,0)).to.equal(0);
        expect(updateBit(1,1,1)).to.equal(3);
        expect(updateBit(1,2,1)).to.equal(5);

        // 10 = 0b1010
        expect(updateBit(10,0,1)).to.equal(11);
        expect(updateBit(10,0,0)).to.equal(10);
        expect(updateBit(10,1,1)).to.equal(10);
        expect(updateBit(10,1,0)).to.equal(8);
        expect(updateBit(10,2,1)).to.equal(14);
        expect(updateBit(10,2,0)).to.equal(10);
    })
})