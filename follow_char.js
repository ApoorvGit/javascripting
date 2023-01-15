function nextCharacter(c) {
    let i=c.charCodeAt(0) + 1
    //console.log(String.fromCharCode(i))
    if(i==123) return "a"
    return String.fromCharCode(i);
}
function follow_char(str){
    let res=""
    for(let i=0; i<str.length;i+=1){
        res+=nextCharacter(str[i])
    }
    return res
}

const arrow_follow_char=(str)=>{
    let res=""
    for(let i=0; i<str.length;i+=1){
        res+=nextCharacter(str[i])
    }
    return res
}
console.log(follow_char("codeacademy"))
console.log(arrow_follow_char("lazyinterns"))