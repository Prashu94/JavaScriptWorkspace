import multiplyByUnsigned from '../multiplyUnsigned';

describe('multiplyByUnsigned', () => {
    it('should multiply 2 usigned bit', () => {
        expect(multiplyByUnsigned(3, 4)).toBe(12);
        expect(multiplyByUnsigned(300, 400)).toBe(120000);
    });
});