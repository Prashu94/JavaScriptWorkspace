import isPositive from '../isPositive'

describe('isPositive', ()=>{
    it('should detect if the number is positive', () => {
        expect(isPositive(1)).toBe(true);
        expect(isPositive(-1)).toBe(false);
    });
})