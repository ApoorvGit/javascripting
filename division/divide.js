const divideAbyB=(a, b)=>{
    if(b==0) throw new Error('Division by Zero is not allowed');
    return a/b;
}
module.exports={divideAbyB}

// console.log(divideAbyB(10,0))