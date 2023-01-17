const {divideAbyB}=require('../divide')

describe('Number Utility', ()=>{
    describe('Divide first number by second number', ()=>{
        it('should invoke an error when second number is 0',()=>{
            expect(()=>divideAbyB(10,0)).toThrow('Division by Zero is not allowed');
        });
        it('should divide first number by second number when b is not zero',()=>{
            const result=divideAbyB(10,5);
            expect(result).toEqual(2);
        });
    });
})