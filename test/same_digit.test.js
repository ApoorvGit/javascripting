const {same_dig, arrow_same_dig}=require('../same_digit.js')
test('same digit', ()=>{
    expect(same_dig(22)).toBeTruthy()
    expect(arrow_same_dig(23)).toBeFalsy()
})