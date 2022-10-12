//3. Filter method
const numbers = [2, 4, 6, 8, 9, 4, 1];
//find even numbers
const evenNumbers = function isEven(number){
    return number % 2 === 0;
}
const evenNums = numbers.filter(evenNumbers);
console.log(evenNums); //[ 2, 4, 6, 8, 4 ]


//using arrow functions
const oddNumbers =numbers.filter((myNumber) => {
    return myNumber % 2 !== 0;
}) 
console.log(oddNumbers); //[ 9, 1 ]

