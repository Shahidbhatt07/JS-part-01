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
fruits.shift();
console.log(fruits);


//how to clone an array

let array1 = ["item1", "item2"];

//using slice method
let array2 =  array1.slice(0);
console.log(array2);

//using concatination
let array3 = [].concat(array1);
console.log(array3);

//using spread operator
let array4 = [...array1];
console.log("using spread operator", array4);


//how to concatinate two arrays
//method 1
let arr1 = ["item1", "item2", "item3"];
let arr2 = arr1.slice(0).concat(["yolo", "zozo"]);
console.log(arr2);

//method 2
let arr3 = [].concat(arr1, ["mezo", "mozo"]);
console.log(arr3);

//method 3
let newarr = ["item4", "item5"]
let arr4 = [...arr1, ...newarr];
console.log(arr4);