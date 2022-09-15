//introduction to arrays
//arrays is an ordered collection of items
//reference type

//how to write an array
// let fruits = ["apple", "grapes", "mango"];
// console.log(fruits);

// let numbers = [1,2,3,4,5,6];
// console.log(numbers);

// let mixed = [1, 'hello', "man", 3, 2.5,];
// console.log(mixed);
// console.log(typeof mixed);
// console.log(Array.isArray(mixed));

//how to update an item inside an array

let fruits = ["apple", "grapes", "mango"];
fruits[1] = "orange";
console.log(fruits);

//push
//it adds element at last

fruits.push("oranges");
console.log(fruits);

//pop
//it removes elements at last
fruits.pop();
console.log(fruits);

let poppedfruits = fruits.pop();
console.log("ppopped fruit is", poppedfruits);


//unshift
//it adds element at beginning

fruits.unshift("gauva");
console.log(fruits);

//shift
//it removes elemnt at beginning


