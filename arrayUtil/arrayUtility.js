const doubleNumber=(numbers)=>{
    if(!Array.isArray(numbers)) throw new Error('Type Error');
    const newNumbers = numbers.map(getDouble);
    return newNumbers;
};

function getDouble(num) {
    return num * 2;
}

const filterEvenNumber=(numbers)=>{
    if(!Array.isArray(numbers)) throw new Error('Type Mismatch');
    return numbers.filter(checkEven);
}

const checkEven=(number)=>{
    return number%2==0;
}


const tripleNumberAndzfilterEven=(numbers)=>{
    if(!Array.isArray(numbers)) throw new Error('Type Error');
    const newNumbers = numbers.map(getTriple);
    return newNumbers.filter(checkEven)
};

function getTriple(num) {
    return num * 3;
}
const tripleNumberAndzfilterEvenUsingReduce=(numbers)=>{
    if(!Array.isArray(numbers)) throw new Error('Type Error');
    const getTripleAndEven=(result, number)=>{
        if(number%2==0){
            result.push(number*3)
            return result;
        }else{
            return result;
        }
    }
    const newNumbers=numbers.reduce(getTripleAndEven, [])
    
    return newNumbers;
}

console.log(tripleNumberAndzfilterEvenUsingReduce([1,2,3,4,5,6]))
module.exports={doubleNumber, filterEvenNumber, tripleNumberAndzfilterEven, tripleNumberAndzfilterEvenUsingReduce};