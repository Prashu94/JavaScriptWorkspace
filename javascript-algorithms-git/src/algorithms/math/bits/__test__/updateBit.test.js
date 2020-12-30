import updateBit from '../updateBit'

describe('updateBit', () => {
    it('should update bit at specific position', () => {
        // 1 = 0b0001
        expect(updateBit(1, 0, 1)).toBe(1);
    });
});