function longest_str(arr){
    let max_n=arr[0].length
    let res=0
    for(let i=1;i<arr.length;i+=1){
        if(arr[i].length>max_n){
            max_n=arr[i].length
            res=i
        }
    }
    return arr[res]
}

const arrow_longest_str=(arr)=>{
    let max_n=arr[0].length
    let res=0
    for(let i=1;i<arr.length;i+=1){
        if(arr[i].length>max_n){
            max_n=arr[i].length
            res=i
        }
    }
    return arr[res]
}
module.exports={
    longest_str,
    arrow_longest_str
}