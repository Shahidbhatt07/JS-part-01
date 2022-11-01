//prototype

function hello() {
    console.log("hello world");
}

//javascript function ==> it is function as well as object      function + object

//proof of object
// we can add our own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty); //very unique value
//name property --> tells function name

console.log(hello.prototype); //it will give us an empty object {} as it was generated when we created function

//only functions can provide prototype property

//adding our properties
hello.prototype.abc = "abc";
hello.prototype.sing = function () {
    console.log("lallala");
}                                    //prototype: {abc: 'abc', sing: ƒ, constructor: ƒ}



//hum jab function create karte hai to hume free mai aaik free space milti hai jisme hum key value pairs add kar sakte hai, yehi prototype kehlata hai


