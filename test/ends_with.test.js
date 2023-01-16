const {ends, arrow_ends}=require('../ends_with.js')

test('testing ends with function', ()=>{
    expect(ends("JavaScript")).toBeTruthy()
    expect(arrow_ends("Apoorv")).toBeFalsy()
})