import multiplyByTwo from '../multiplyByTwo'

describe('multiplyByTwo', () => {
    it('should return the double of the number', () => {
        expect(multiplyByTwo(5)).toBe(10);
    });
})