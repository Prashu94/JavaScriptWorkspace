let expect = require('chai').expect;
let multiply = require('../multiply');

describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(0, 0)).to.equal(0);
      expect(multiply(2, 0)).to.equal(0);
      expect(multiply(0, 2)).to.equal(0);
      expect(multiply(1, 2)).to.equal(2);
      expect(multiply(2, 1)).to.equal(2);
      expect(multiply(6, 6)).to.equal(36);
      expect(multiply(-2, 4)).to.equal(-8);
      expect(multiply(4, -2)).to.equal(-8);
      expect(multiply(-4, -4)).to.equal(16);
      expect(multiply(4, -5)).to.equal(-20);
      expect(multiply(2, 121)).to.equal(242);
      expect(multiply(121, 2)).to.equal(242);
    });
  });
  