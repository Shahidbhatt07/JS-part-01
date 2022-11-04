//? class

class createUser{ 
    constructor(firstName, lastName, email, age, address) {
        console.log("constructor is called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    //see how we add methods to this constructor
    about() {
        return `${this.firstName} is ${this.age} years old`
    };
    is18() {
        return this.age >= 18
    };
    sing() {
        console.log("la la la la")
    };
    func(a) {
        console.log(a);
    }
}
// Note: Class constructor createUser cannot be invoked without 'new'
const user1 =new createUser("shaHID", "BAHT", "bhahts@gmail.com", 22, "nh444");
const user2 =new createUser("zahur", "mir", "zahurs@gmail.com", 52, "nowgam");
const user3 = new createUser("akif", "dar", "akif@gmail.com", 72, "kanipora");

console.log(user1.about()); //shaHID is 22 years old

console.log(Object.getPrototypeOf(user1)); //{constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}

user3.func("welcome to classes");