//reduce method
const numbers = [1, 4, 7, 9, 2, 5];
// aim: sum of all the numbers in an array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sum);  //28


//BTS of reduce i.e who it works
//accumulator            currentValue             return
// 1                         4                       5
// 5                         7                       12
// 12                        9                       21
// 21                        2                       23
// 23                        5                       28

//*********************************************************************/
//we can set initial value to an acumulator as well
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 100) //here i have set a value 100 to accumulator, so the total sum will be 128
// console.log(sum);  //128
//*********************************************************************/


//realistic example
//add all the prices
const userCart = [
    { productId: 1, productName: "phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tab", price: 13000 }
]
const mySum = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);
console.log(mySum); //45000