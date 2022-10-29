//? methods
//function inside an object is k/a method
// "this" keyword refer to an object and is basically an object

// const user = {
//     firstName: "shahid",
//     age: 22,
//     getInfo: function () {
//         console.log(`my name is ${this.firstName} and my age is ${this.age}`); //here `this` keyword is special and it refers to an object i.e user object
//     }
// }
// user.getInfo();

//! ---------------------------------------------------------------

function getMyInfo () {
    console.log(`my name is ${this.firstName} and my age is ${this.age}`);
}

const user1 = {
    firstName: "shahid",
    age: 22,
    about: getMyInfo
}
const user2 = {
    firstName: "haseeb",
    age: 32,
    about: getMyInfo
}
const user3 = {
    firstName: "arshad",
    age: 20,
    about: getMyInfo
} 

user2.about(); //my name is haseeb and my age is 32
user3.about(); //my name is arshad and my age is 20
user1.about(); //my name is shahid and my age is 22
