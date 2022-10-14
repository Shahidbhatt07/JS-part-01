//sort method --it arranges the items on the basis of your requirements
//in sort methods, arrays are mutable

   //ASCII Table
//  "char"      "ascii value"

//    "0"       48
//     -         -
//     -         -
//     -         -
//    "9"       57

//    "A"       65
//     -         -
//     -         -
//     -         -
//     -         -
//    "Z"       90

//    "a"       97
//     -         -
//     -         -
//     -         -
//    "z"       122


const numbers = [233, 56, 7889, 6547, 2245, 6];

const assendingOrder = numbers.sort((a, b) => {
    return a - b;
});
console.log(assendingOrder);

const desendingOrder = numbers.sort((a, b) => {
    return b - a;
});
console.log(desendingOrder);


//relastic example
const products = [
    { productId: 1, productName: "phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tab", price: 13000 },
    { productId: 4, productName: "computer", price: 15000 },
    { productId: 5, productName: "iphone14", price: 202000 },
    { productId: 6, productName: "hp laptop", price: 17000 }
]
const LowToHigh = products.slice(0).sort((a, b) => { //why i use slice? in sort arrays are mutable, so if i dont want to change this original array, i have to clone it, so i used slice method to save the changes in new array.
    return a.price - b.price;
})
console.log(LowToHigh);

const HighToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
})
console.log(HighToLow);
console.log(products);