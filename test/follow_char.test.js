const {follow_char, arrow_follow_char}=require('../follow_char.js');

test('testing functionality to do cyclic shift of characters in a string', ()=>{
    expect(follow_char('codeacademy')).toBe('dpefbdbefnz');
    expect(arrow_follow_char('codeacademy')).toBe('dpefbdbefnz');
});