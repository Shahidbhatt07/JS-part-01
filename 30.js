// ? Sets
// 1. Sets are iterable
// 2. No index based access
// 3. Order is not guaranteed
// 4. Unique items only (no duplicates allowed)
// 5. Sets also have its own methods like add, has

// syntax
// const num = new Set();


const numbers = new Set();
//add
numbers.add(2);
numbers.add(2); // this cant be added because it doesnt take duplicates

numbers.add("hello");
numbers.add(["apple", "mango"]);  // here, we have two arrays with same elements and it takes both of them because the get different memory locations
numbers.add(["apple", "mango"]); //Set(4) { 1, 'hello', [ 'apple', 'mango' ], [ 'apple', 'mango' ] }


//has   it returns either true or false
if (numbers.has(2)) {
    console.log(`2 is present`) //2 is present
}
else {
    console.log(`2 is not present`);
}

//are Sets iterable    ..fot this, we know if for of loop applies on it, then it is iterable
for (let number of numbers) {
    console.log(number);
}                               //2
                                //hello
                                //[ 'apple', 'mango' ]
                                //[ 'apple', 'mango' ]

console.log(numbers);

const myArray = [1, 2, 3, 3, 4, 6, 7, 7];
const uniqueElements = new Set(myArray);  
console.log(uniqueElements);  //Set(6) { 1, 2, 3, 4, 6, 7 }
console.log(uniqueElements.length);  //!undefined

console.log(myArray);  //[1, 2, 3, 3, 4, 6, 7, 7 ]

//! how we can find lenght in sets
let length = 0;
for (let num of uniqueElements) {
    length++
}
console.log(length); //6
    
