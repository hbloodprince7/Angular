import { greet } from './greet'

fdescribe('greet', ()=> {
    it('should include the name in the message', ()=>{
        const name = 'Tony';
        const name1 = 'Pepper';
        expect(greet(name)).toContain(name);
    });
});