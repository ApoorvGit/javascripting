function delete_and_concat(str1, str2){
    return str1.slice(1)+str2.slice(1);
}
const arrow_delete_and_concat=(str1, str2)=>{
    return str1.slice(1)+str2.slice(1);
};
console.log(delete_and_concat('apoorv', 'mishra'));
console.log(arrow_delete_and_concat('code', 'academy'));

module.exports={
    delete_and_concat,
    arrow_delete_and_concat
};