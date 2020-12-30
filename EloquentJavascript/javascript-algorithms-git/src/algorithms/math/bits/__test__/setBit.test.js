import setBit from '../setBit';

describe('setBit', ()=>{
    it('should set a bit at a specific position', () => {
        expect(setBit(1, 0)).toBe(1);
    })
})