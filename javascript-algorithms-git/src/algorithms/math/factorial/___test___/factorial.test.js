import factorial from '../factorial'

describe('factorial', () => {
    it('should calcualate the factorial simple', () => {
        expect(factorial(5)).toBe(120);
    });
});