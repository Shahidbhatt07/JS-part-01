//2. map method

// const numbers = [3, 8, 9, 5, 1, 4];
// const squareNumbers= function(number) {
//     return number * number;
// }
// const squares = numbers.map(squareNumbers);
// console.log(squares);  //[ 9, 64, 81, 25, 1, 16 ]



//use function inside map method
// const numbers = [3, 8, 9, 5, 1, 4];
// const squares = numbers.map(function(number){
//     return number * number;
// })
// console.log(squares); //[ 9, 64, 81, 25, 1, 16 ]


//using arrow function
const numbers = [3, 8, 9, 5, 1, 4];
const squares = numbers.map((number) => {
    return number * number;
})
console.log(squares); //[ 9, 64, 81, 25, 1, 16 ]


//relaistic example
let users = [
    { firstname: "shahid", age: 23 },
    { firstname: "zahur", age: 29 },
    { firstname: "younis", age: 30 },
    { firstname: "adnan", age: 24 },
]
const firstNames = users.map((user) => {
    return user.firstname;
})
console.log(firstNames); //[ 'shahid', 'zahur', 'younis', 'adnan' ]