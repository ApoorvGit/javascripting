const {longest_str, arrow_longest_str}=require('../longest_string.js')

test('testing longest string function', ()=>{
    expect(longest_str(["we", "love", "code", "academy"])).toBe("academy")
    expect(arrow_longest_str(["i", "am", "apoorv"])).toBe("apoorv")
})