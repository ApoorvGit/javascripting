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

console.log(tripleNumberAndzfilterEven([1,2,3,4,5,6]))
module.exports={doubleNumber, filterEvenNumber, tripleNumberAndzfilterEven};