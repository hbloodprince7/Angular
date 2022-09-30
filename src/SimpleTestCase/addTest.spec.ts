import { addTest } from './addTest';

fdescribe('addTest', () => {
    it('Should return the sum of inputs', ()=> {
        const result = addTest(4,6);
        expect(result).toBe(10);
    });
});