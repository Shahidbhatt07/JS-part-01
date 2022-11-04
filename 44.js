//? getter and setters

class Info{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

     //... fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }

    //get 
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //set
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }


}
const person1 = new Info("shahid", "bhat", 22);
// console.log(person1);
//... console.log(person1.fullName);  /*ƒ fullName() { return `${this.firstName} ${this.lastName}`} */ //but i want this full method would be called as like properties are called i.e, without (), so we use get in method

//get
// console.log(person1.fullName); //shahid bhat


//set
person1.fullName = "zahur mir";
console.log(person1);



