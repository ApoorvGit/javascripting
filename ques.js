const isPrime=(x)=>{
    if(x%2==0) return false
    for(let i=2;i<x;i=i+2){
        if(x%i==0) return false
    }
    return true 
}

const isArm=(xi)=>{
    let x=xi
    let total=0
    while(x>0){
        let i=x%10
        // console.log(i)
        x=Math.floor(x/10)
        total=total+i*i*i
    }
    return total===xi
}

console.log(isPrime(10))
console.log(isArm(153))