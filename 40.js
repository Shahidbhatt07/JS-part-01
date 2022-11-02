// lets create a relation between __proto__ and prototype

// const userMethod = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
// };
/* ye jo oper function hai mujhe isko banane ki koi zarurat nai hai, kyunki hum jante hai ki 
    jab hum koi function create karte hai to hume uska prototype b bann jaata hai jo aaik type ka 
    empty object hote hai jisme hum khud properties and methods add kar sakte hai
*/
  
  function createUser(firstName, lastName, email, age, address) {
      const user = Object.create(createUser.prototype);
      user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
  //dekho hum kaise prototype mai methods add kare gei
    createUser.prototype.about =  function () {
        return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    console.log("la la la la");
}


const user1 = createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
const user2 = createUser("zahur", "mir", "zahurs@gmail.com", 52, "nowgam");
const user3 = createUser("akif", "dar", "akif@gmail.com", 72, "kanipora");

  console.log(user2);
console.log(user1.about());
  console.log(user1.is18());
  
  

