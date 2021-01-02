import bitDiff from '../bitsDiff'

describe('bitDiff', () => {
    it('should display the bit difference', () => {
        expect(bitDiff(6,1)).toBe(3);
    });
});