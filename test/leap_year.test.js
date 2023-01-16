const {check_leap_year, arrow_check_leap_year}=require('../leap_year.js')

test('testing leap year finding function', ()=>{
    expect(check_leap_year(2000)).toBeTruthy()
    expect(arrow_check_leap_year(2022)).toBeFalsy()
})