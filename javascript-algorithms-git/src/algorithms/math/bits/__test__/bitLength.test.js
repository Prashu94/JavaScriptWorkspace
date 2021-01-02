import bitLength from '../bitLength'

describe('bitLength', () => {
    it('should check the bitLength', () => {
        expect(bitLength(6)).toBe(3);
    });
});