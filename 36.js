//? `this` in Arrow Functions
// arrow functions doesnt have its own this keyword and it takes it from its surroundings i.e, in above levels




const user1 = {
    firstName: "shahid",
    age: 22,
    about: () => {
        // console.log(this);
        console.log(`${this.firstName}, ${this.age}`);
    }
    
}
user1.about(); //undefined, undefined

//note: we cant change this of arrow function
user1.about(user1); //undefined, undefined