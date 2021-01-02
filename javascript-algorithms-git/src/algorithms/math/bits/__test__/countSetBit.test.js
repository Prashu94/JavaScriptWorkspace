import countSetBit from '../countSetBit';

describe('countSetBit', () => {
    it('should count the bit set as 1', () => {
        expect(countSetBit(7)).toBe(3);
    });
});