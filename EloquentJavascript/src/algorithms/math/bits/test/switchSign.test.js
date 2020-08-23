let expect = require('chai').expect;
let switchSign = require('../swtichSign');

describe(`switchSign`, ()=>{
    it(`should switch the sign of the number given`, ()=>{
        expect(switchSign(-3)).to.equal(3);
    });
});