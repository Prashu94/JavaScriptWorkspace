import factorial from '../factorial-recursive'


describe('factorial', () => {
    it('should calcualate the factorial recursive', () => {
        expect(factorial(5)).toBe(120);
    });
});