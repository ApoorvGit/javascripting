const {opp_case, arrow_opp_case}=require('../opposite_case.js')
test('change the case to opposite', ()=>{
    expect(opp_case("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP")
    expect(arrow_opp_case("mErrY Had A littLE LamP")).toBe("MeRRy hAD a LITTle lAMp")
})