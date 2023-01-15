const {larg_even, arrow_larg_even}=require('../largest_even.js')

test('finding largest even number', ()=>{
    expect(larg_even([1, 2, 3, 4, 5])).toStrictEqual(4)
    expect(arrow_larg_even([1, 3, 5, 7])).toStrictEqual(-1)
} )