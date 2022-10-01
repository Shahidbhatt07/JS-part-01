// Functions
//1.Function declaration
function hello() {
  console.log("happy birthday shahid");
}
// hello();     //happy birthday shahid

function sum(val1, val2, val3) {
  return val1 + val2 + val3;
}
// console.log(sum(2,3,4));      //9

//______________________________________//

// function isEven (number) {
//     if (number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(20));   //true

function isEven(number) {
  return number % 2 === 0;
}
// console.log(isEven(25));  //false

//-------------------------------------//

//find first character
function firstChar(char) {
  return char[0];
}
// console.log(firstChar("Shahid"));    //S

//given: array, target, if target is present in an array, return its index val, if not present then return -1
function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
    
  }
  return -1;
  
}
let myArr = [1, 2, 4, 7];
let ans = findTarget(myArr, 7);
// console.log(ans);   //3


// <<<<<<<<<<<<<<-------------------------------------->>>>>>>>>>>>>>>>>>>>>>
//2.function Expression


const mySum = function(x,y,z) {
   return (x+y+z);
}
console.log(mySum(2,3,5)); //10


const isOdd = function (number) {
  return (number % 2 !== 0)
}
console.log(isOdd(10)); //false

const myBirthday = function() {
  console.log("happy birthday shahid");
}
myBirthday(); //happy birthday shahid