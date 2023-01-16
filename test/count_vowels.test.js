const {count_vow, arrow_count_vow}=require('../count_vowels.js')

test('testing functioanlity to count number of vowels in input string', ()=>{
    expect(count_vow("apoorv")).toBe(3)
    expect(arrow_count_vow("academy")).toBe(3)
})