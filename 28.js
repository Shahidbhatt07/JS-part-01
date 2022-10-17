//fill method
//use cases
//1. Q, make an array with the help of fill method of lenght 10 and every element should be -1

const myArray = new Array(10).fill(-1);
console.log(myArray); //[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]

//2.
// in the given array, change the numbers for index 2 to 4 with the number 10;
// value     start         end
const array2 = [2, 3, 5, 7, 5, 3, 1, 4, 6, 7, 4];
array2.fill(10, 2, 5);    //end is 5 and it is not included so te change will be upto index 4
console.log(array2); //index 0  1   2   3   4  5  6   7   8   9  10
                         //[ 2, 3, 10, 10, 10, 3, 1,  4,  6,  7, 4]
 
  
 
