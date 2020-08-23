let expect = require('chai').expect;
let multiplyByTwo = require('../multipleByTwo');

describe("mutiplyByTwo", ()=>{
    it("should multiply the numbers by using bitwise operations", ()=>{
        expect(multiplyByTwo(5)).to.equal(10);
    });
});