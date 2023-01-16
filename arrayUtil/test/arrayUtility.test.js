const {doubleNumber, filterEvenNumber}=require('../arrayUtility');


describe('Array Utilities', ()=>{
    describe('Double numbers', ()=>{
        it('should invoke an error when input is not an array',()=>{
            expect(()=>doubleNumber('abc')).toThrow('Type Error');
        });
        it('should invoke an error when input is not an array',()=>{
            const result=doubleNumber([1,2,3]);
            expect(result).toEqual([2, 4, 6]);
        });
    });

    describe('Filter Even Number', ()=>{
        it('should invoke an error when input is not an array',()=>{
            expect(()=>filterEvenNumber('abc')).toThrow('Type Mismatch');
        });
        it('should invoke an error when input is not an array',()=>{
            const result=filterEvenNumber([1,2,3,4,5,6]);
            expect(result).toEqual([2, 4, 6]);
        });
    });
    
});