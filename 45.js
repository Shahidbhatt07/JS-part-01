//? Static methods and properties
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //methods of object
    about() {
        return `${this.firstName} is ${this.age} years old`
    };
    is18() {
        return this.age >= 18
    };
    sing() {
        console.log("la la la la")
    };
    
    //method of class------ static method
    static classInfo() {
        return `this is person class`;
    }

    //staic properties
    static decs = "i am here static proprties";
}

//calling object method
const person1 = new Person("shahid", "bhat", 22);
console.log(person1); //Person { firstName: 'shahid', lastName: 'bhat', age: 22 }


//calling class method
const ans = Person.classInfo();
console.log(ans); //this is person class

//calling class method on object
// const person2 = new Person("meer", "wani", 34);
// console.log(person2.classInfo()); //TypeError: person2.classInfo is not a function



//static properties
console.log(Person.decs); //i am here static proprties

console.log(person1.decs); //undefined

//Note: static methods and staic properties are applied or are being called by class only. They are not accessable by objcts


// ________________________________Part 01 Ends------------------------------