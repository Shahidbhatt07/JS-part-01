//? new keyword
/*what does new keyword do
1)it creates an empty this object {}
2)it returns this empty object
3) it will create relation by its own i.e, we do not require manually to create relation i.e object.create(user.prototype) we do not require to do this
3) urdu: new keyword ye kre ga ki, jo mere objects hai, unke __proto__ vo khud kiske equal set kardega function ke prototype ke, mtlb object ka __proto__ hume function ke prototype tak leke jaaye ga 
  */

// by defuault, new keyword sets __proto__ equal to the prototype, i.e, __proto__ is reference that will guide to prototype

//! note: using new keyword, we use 'this' keyword too

//constructor function
function createUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

createUser.prototype.about =  function () {
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
return this.age >= 18;
};
createUser.prototype.sing = function () {
console.log("la la la la");
}

const user1 =new createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
const user2 =new createUser("zahur", "mir", "zahurs@gmail.com", 52, "nowgam");
const user3 =new createUser("akif", "dar", "akif@gmail.com", 72, "kanipora");

//   console.log(user2);
// console.log(user1.about());
// console.log(user1.is18());
  

/* useful tip : agr koi developer hai aur usne koi library banani hai,
 aur usne new keyword laga ke objects ko call karna hai, usko kaise pta chalega ki
 maine new keyword laga ke call karna hai,uske liye aaik convebntion hai ki bas aaik kaam karna hai jo ye constructor function hai,
 iska jo createUser isme c capital likhna hoga i.e,  CreateUser
 */


 //here i want those read only those keys which are its own not keys from its prototype eg, is18, about etc
 
// hasOwnProperty

for (let key in user1) {
    // console.log(key) /*firstName lastName email age address about is18 sing */ //i dont want this

        if (user1.hasOwnProperty(key)) {
           console.log(key); /*firstName lastName email age address */
       }; 
    }