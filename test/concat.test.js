const {delete_and_concat, arrow_delete_and_concat}=require('../concat.js')

test('testing delete the first characters and then concat functioanlity', ()=>{
    expect(delete_and_concat("code", "academy")).toBe("odecademy")
    expect(arrow_delete_and_concat("Apoorv", "Mishra")).toBe("poorvishra")
})