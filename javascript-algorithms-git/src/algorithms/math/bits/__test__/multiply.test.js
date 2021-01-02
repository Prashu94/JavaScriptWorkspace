import multiply from '../multiply'

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});