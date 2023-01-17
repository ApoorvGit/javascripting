const {doubleNumber, filterEvenNumber, tripleNumberAndzfilterEven}=require('../arrayUtility');


describe('Array Utilities', ()=>{
    describe('Double numbers', ()=>{
        it('should invoke an error when input is not an array',()=>{
            expect(()=>doubleNumber('abc')).toThrow('Type Error');
        });
        it('should double each number when input is an array',()=>{
            const result=doubleNumber([1,2,3]);
            expect(result).toEqual([2, 4, 6]);
        });
    });

    describe('Filter Even Number', ()=>{
        it('should invoke an error when input is not an array',()=>{
            expect(()=>filterEvenNumber('abc')).toThrow('Type Mismatch');
        });
        it('should filter even numbers when input is an array',()=>{
            const result=filterEvenNumber([1,2,3,4,5,6]);
            expect(result).toEqual([2, 4, 6]);
        });
    });
    describe('Triple each number and Filter Even Number', ()=>{
        it('should invoke an error when input is not an array',()=>{
            expect(()=>tripleNumberAndzfilterEven('abc')).toThrow('Type Error');
        });
        it('should triple each number and then filter even numbers when input is an array',()=>{
            const result=tripleNumberAndzfilterEven([1,2,3,4,5,6]);
            expect(result).toEqual([6,12,18]);
        });
    });
    

});