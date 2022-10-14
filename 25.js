//6. find method
//Q. find the word of lenght 3
const myArray = ["hello", "cat", "dog", "apple"];
function lenghtOfThree(word) {
    return word.length === 3;
}
const ans = myArray.find(lenghtOfThree);
console.log(ans);  //cat   //it will always give that ans which it finds first


//relastic example
const userCart = [
    { productId: 1, productName: "phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tab", price: 13000 },
    { productId: 4, productName: "computer", price: 15000 },
    { productId: 5, productName: "iphone14", price: 202000 },
    { productId: 6, productName: "hp laptop", price: 17000 }
]
const ans2 = userCart.find((users) => users.productId === 3);

console.log(ans2); //{ productId: 3, productName: 'tab', price: 13000 }
