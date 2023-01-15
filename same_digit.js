function same_dig(n){
    let a=n%10
    while(n>0){
        let i=n%10;
        n=Math.floor(n/10)
        if(i!=a) return false
    }
    return true
}
const arrow_same_dig=(n)=>{
    let a=n%10
    while(n>0){
        let i=n%10;
        n=Math.floor(n/10)
        if(i!=a) return false
    }
    return true
}
module.exports={
    same_dig, 
    arrow_same_dig
}
