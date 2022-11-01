//__proto__ or [[Prototype]]
//__proto__ / [[Prototype]] and prototype are different concepts and prototype is related to funcions


//what i want is get access the keys of obj1 by obj2

obj1 = {
    Key1: "value1",
    key2 : "value2"
}

// method1
// obj2 = {
//     key3: "value3"
// }

// method2
// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key3); //value3

//? this is the method i want
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2.key3); //value3
console.log(obj2.Key1); //value1
console.log(obj2); //{key3: 'value3'}key3: "value3"[[Prototype]]: Object
console.log(obj2.__proto__); //{Key1: 'value1', key2: 'value2'}
console.log(obj1.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

//!obj2.__proto__ <-----> this prperty is also known as dunder