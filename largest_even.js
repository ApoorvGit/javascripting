function larg_even(arr){
    let res=-1
    arr.forEach(le)
    function le(item, i, arr){
        if(item%2==0){
            if(res===-1 || arr[res]<item) res=i 
        }
    }
    return res===-1?-1:arr[res]
}

// console.log(larg_even([1, 3, 5, 7]))

const arrow_larg_even =(arr)=>{
    let res=-1 
    const le=(item, i, arr)=>{
        if(item%2==0){
            if(res===-1 || arr[res]<item) res=i
        }
    }
    arr.forEach(le)
    return res==-1?-1:arr[res]
}
// console.log(arrow_larg_even([1, 2, 3, 4, 5]))

module.exports={
    larg_even,
    arrow_larg_even
}