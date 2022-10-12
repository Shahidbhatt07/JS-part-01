//Important array methods
//1. forEach
//Q. print number and its index of the numbers given in an array
let numbers = [4, 3, 5, 8];
function myFunc(number, index){
  console.log(`number is ${number} and its index is ${index}`);  //number is 4 and its index is 0
                                                                 //   number is 3 and its index is 1
                                                                 //   number is 5 and its index is 2
                                                                 //   number is 8 and its index is 3
}
//using for loop
// for (let i = 0; i < numbers.length; i++){
//     myFunc(numbers[i], i);
// }

//using forEach
numbers.forEach(myFunc);


//Q2. print number*2
myNumbers = [2, 3, 4, 5, 6, 7];
myNumbers.forEach(function (num) {
    console.log(`${num}*2 = ${num * 2}`);
})                                              
                                                // 2*2 = 4
                                                // 3*2 = 6
                                                // 4*2 = 8
                                                // 5*2 = 10
                                                // 6*2 = 12
                                                // 7*2 = 14                                                

///Q........
let users = [
    { firstname: "shahid", age: 23 },
    { firstname: "zahur", age: 29 },
    { firstname: "younis", age: 30 },
    { firstname: "adnan", age: 24 },
]
users.forEach((user) => {      //using arrow function
    console.log(user.firstname);    //shahid zahur younis  adnan  
})


