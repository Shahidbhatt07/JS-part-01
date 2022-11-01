// const user1 = {
//     firstName: "shahid",
//     lastName: "bhat",
//     email: "bhatshahid@gmail.com",
//     age : 22,
//     address: "nh444",
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }

// }
// const user2 = {
//     firstName: "shahida",
//     lastName: "begum",
//     email: "shahida@gmail.com",
//     age: 17,
//     address: "chandigrah",
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// const about = user1.about();
// console.log(about);
// const is18 = user1.is18();
// console.log(is18);

//!----------------------Improvement------------------------------------------
//here we created function for multiple users

// function createUser(firstName, lastName,email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about= function () {
//                 return `${this.firstName} is ${this.age} years old`
//     };
//     user.is18= function () {
//                 return this.age >= 18;
//     }
//     return user;

// }
// const user1 = createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
// console.log(user1);
// const about = user1.about();
// console.log(about);

//!-----------------------More improvement-------------------------------------
//here we created outside userMethod object in which i put all the methods we have just to save the memory

// const userMethod = {
//  about :function () {
//         return `${this.firstName} is ${this.age} years old`
// },
// is18: function () {
//         return this.age >= 18;
// }
// }

// function createUser(firstName, lastName,email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethod.about;
//     user.is18 = userMethod.is18;
//     return user;

// }

// const user1 = createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
// const user2 = createUser("zaHID", "khan", "zahs@gmail.com", 40, "nh4");
// const user3 = createUser("waHID", "meer", "wahs@gmail.com", 10, "nh1000");

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());

// console.log(user1.is18());
// console.log(user2.is18());
// console.log(user3.is18());

//!--------------------more more improvement--------------------------
//here if we have more no of methods in userMethod object, then how we will cope up with this

//before getting its solution, we will cover a topic in file no 38 and the topic is --proto--

const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethod); // it give me empty object {} and it creates link and joins user with userMethod so its methods are used
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
//   user.about = userMethod.about;
//   user.is18 = userMethod.is18;
  return user;
}
const user1 = createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
console.log(user1);
console.log(user1.about()); //shaHID is 22 years old


