function ends(str){
    if(str.endsWith("Script")) return true
    return false
}
const arrow_ends=(str)=>{
    if(str.endsWith("Script")) return true
    return false
}
console.log(ends("JavaScript"))
console.log(ends("apoorv"))
module.exports={
    ends,
    arrow_ends
}