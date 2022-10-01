//Arrow Functions
// To make an arrow function we convert a function declaration into a function expression and then arrow function (Easy way to understand amd learn)

//function expression
// const singMyBirthday = function(){
//     return "happy birthday shahid"
// }
// const birth = singMyBirthday();
// console.log(birth);

//Arrow function
// 1.
const singMyBirthday = () => {
    return "happy birthday to yoooooo"
}
const birth = singMyBirthday();
console.log(birth);

// 2.
const sumThreeNumbers = (v1, v2, v3) =>{
   return (v1+v2+v3)
}
const ans = sumThreeNumbers(1, 2, 3);
console.log(ans); //6

// 3.
const isEven = (number) => {
    return number % 2 == 0;
}
console.log(isEven(10)); //true

//  Note :- 1. if i have a single argument to pass, i can remove the brackets() around that parameter  e.g (number) --> number
//  2. i can also write this function only in a single line on removing curly backets and also return keyword
const isEven1 = num => num % 2 === 0;
console.log("here u see:-", isEven1(10)); //here u see:- true

//4.
const firstChar = (char) => {
    return char[0];
}
// ********using 2nd way***************
// const firstChar = char => char[0];

console.log(firstChar("Shahid")); //S

//5.
const findTarget= (array, target) =>{
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
      
    }
    return -1;
    
  }
  let myArr = [1, 2, 4, 7];
  let ans2 = findTarget(myArr, 7);
  console.log(ans2);   //3