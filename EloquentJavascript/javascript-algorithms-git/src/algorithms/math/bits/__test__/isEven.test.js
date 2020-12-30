import isEven from '../isEven'

describe('isEven', () => {
    it('should detect if the number given is even', ()=>{
        expect(isEven(0)).toBe(true);
        expect(isEven(1)).toBe(false);
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven(4)).toBe(true);
        expect(isEven(-1)).toBe(false);
        expect(isEven(-3)).toBe(false);
        expect(isEven(-2)).toBe(true);
    });
});