// //objects store data in key value pairs
// //keys are also called as properties

// //How to create objects
// const person = {
//     name : "shahid",
//     university : "RIMT",
//     age : 23
// }

// //how to access data form objects
//  console.log(person.name)
// console.log(person.age);


// //How to add key value pairs to objects
// //1. using dot notation
// person.hobbies = ["cricket", "football", "swimming"]
// console.log(person);
// //using bracket notation
// person["gender"] = "male"
// console.log(person);

// console.log(person["gender"]); //accesssing an element using bracket notation


//<<<<<------------------------------------------>>>>>>>>>>>>>>>>

//difference between dot and braket notation

const person = {
        name : "shahid",
         university : "RIMT",
         age : 23 ,
         "my hobbies" : ["cricket", "football", "swimming"],
         gender : "male"
     }

//1. if we have a key of two different word, we can't access it with dot notation

// console.log(person.my hobbies); //SyntaxError: missing ) after argument list
console.log(person["my hobbies"]);

//2. if we have a key , and we want that key to be in our object, we can only use that acctual key only by using bracket notation
let key = "email";  //i want this "email" as to be my key and want to add value to it
const info = {
    name : "muteeb",
    address : "srinagar",
    phone : 000000000
}
// info.key = "shahid@gmail.com" // key: 'shahid'  but this is not the outcome i want
// console.log(info);

// info["key"] ="shahid@gmail.com"
// console.log(info);  //  key: 'shahid@gmail.com'     not desiried output

info[key] = "shahid@gmail.com"
console.log(info); //    email: 'shahid@gmail.com' desired output :)


//how to iterate an object
//1. for in loop
for (let property in info){
    // console.log(info[property]);
    console.log(`${property} : ${info[property]}`);
}
//2. object.keys
console.log(Object.keys(person));

for (let keys of Object.keys(person)){ //using for of for values
    console.log(person[keys]);
}


//computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

let obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj);
//2nd way
const objj = {};
objj[key1] = value1
objj[key2] = value2
console.log(objj);