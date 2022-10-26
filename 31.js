//? Maps
// maps are iterable
// maps store data in ordered fashion
// stores key value pairs like objects
// duplicate keys are not allowed like objects

//? difference b/W maps and objects
  // objects can only have string or symbol as keys
  // maps can have anything as keys like array, number, string etc

// syntax
// const numbers = new Map();

// Map method ...> set , get

const numbers = new Map();
numbers.set(`key1`, `value1`); //string type key value pair
numbers.set([1, 2, 3], 123) // array and number type key value pair
numbers.set(1, "one") // number and string type key value pairs
numbers.set(`key1`, `value1`); // not allowed duplicate key
console.log(numbers);

// how to get an elements in Map 
console.log(numbers.get(1)); //one
console.log(numbers.get(`key1`)); //value1

//iterable
for (let [key, value] of numbers) {   //here is also the concept of destructuring  >>>> [key, value]
    console.log(key, value );
    console.log(typeof key);
    console.log(Array.isArray(key));
}



// realistic example
//Q. given is an object and i want to add some other info with map object

const person1 = {
    name: "Shahid",
    cast: "bhat",
}
const person2 = {
    name: "Shahida",
    cast: "banu",
}


const additionalInfo = new Map();
additionalInfo.set(person1, { age: 24, gender: "male"});
additionalInfo.set(person2, { age: 22, gender: "female"});
console.log(additionalInfo);
console.log(additionalInfo.get(person1).age); //24
console.log(additionalInfo.get(person2).gender); //female 
console.log(person1.name); //Shahid