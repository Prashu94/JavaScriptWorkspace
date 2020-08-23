let expect = require('chai').expect;
let divideByTwo = require('../divideByTwo');

describe("divideByTwo", ()=>{
    it("should divide numbers by two using botwise operations", ()=>{
        expect(divideByTwo(5)).to.equal(2);
    });
});