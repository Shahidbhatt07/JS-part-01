//some method
// find is there any number which is even
const numbers = [3, 5, 8, 9];
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans); //true

//relastic example
const userCart = [
    { productId: 1, productName: "phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tab", price: 13000 },
    { productId: 4, productName: "computer", price: 15000 },
    { productId: 5, productName: "iphone14", price: 202000 },
    { productId: 6, productName: "hp laptop", price: 107000 }
]
//check whether any item has price greater than 100000
const ans2 = userCart.some((itemPrice) => itemPrice.price > 100000);
console.log(ans2); //true