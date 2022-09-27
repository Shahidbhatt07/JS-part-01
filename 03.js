//array destructuring 

const myarray = ["value1", "value2", "value3"];

//ordinary way to destructure an array

let arr1 =  myarray[0];
console.log(arr1);
let arr2 =  myarray[1];
console.log(arr2);
let arr3 =  myarray[2];
console.log(arr3);

//professional and short cut way

let [array1, array2, array3] =  myarray;
console.log(array1);
console.log(array2);
console.log(array3);

//if i want to store 2nd and 3rd one
let [ , array4, array5] = myarray;
console.log(array4);
console.log(array5);

//if i want to store last two elements in anoter array
//simple approach
let newarr = myarray.slice(1);
console.log(newarr);

//use this method
let [array6, ...array7] = myarray;
console.log(array6);
console.log(array7);