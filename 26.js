//every method
const numbers = [2, 4, 6, 8, 10];
const ans= numbers.every((isEven) => isEven % 2 === 0);
console.log(ans); //true

//relastic example
//is price of every item is > 10000
const userCart = [
    { productId: 1, productName: "phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tab", price: 13000 },
    { productId: 4, productName: "computer", price: 15000 },
    { productId: 5, productName: "iphone14", price: 202000 },
    { productId: 6, productName: "hp laptop", price: 17000 }
]
const ans2 = userCart.every((priceItem) => priceItem.price > 10000);
console.log(ans2); true
