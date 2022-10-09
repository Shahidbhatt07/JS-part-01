//Rest parameters
function myNumbers(a, b, ...c) {
    console.log(`value of a is ${a}`); //value of a is 2
    console.log(`value of b is ${b}`); //value of b is 3
    console.log(`value of c is ${c}`); //value of c is 4,5,6,7,8,9
}
myNumbers(2, 3, 4, 5, 6, 7, 8, 9);

// ............................................................................................

// add all the numbers 
function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    console.log(total); //24
}
addAll(1, 3, 5, 6, 9);