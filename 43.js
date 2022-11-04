//? Concept of inheritance

//object is also know as Instance

//Q. make a class having properties and methods

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const animal1 = new Animal("tom", 2);
console.log(animal1.isCute()); //true
console.log(animal1.eat()); //tom is eating

const animal2 = new Animal("jerry", 1);
console.log(animal2.isSuperCute()); //true


const animal3 = new Animal("husky", 2);
console.log(animal3.isCute()); //true
console.log(animal3.isSuperCute()); //false

console.log(animal1.__proto__);




//! Dog class

// class Dog extends Animal{

// }

// const Dog1 = new Dog("tommy", 2);
// console.log(Dog1); //Dog { name: 'tommy', age: 1 }
// console.log(Dog1.isSuperCute()); //false


//___________________________________________________________________??//



//? Super()
//now i want to add some more properties and methods to constructor. lets see how can we do this

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     runs() {
//         return `${this.name} runs at the speed of ${this.speed}`
//     }
// }

// const Dog1 = new Dog("tommy", 2, "45 kmph");
// console.log(Dog1); //Dog { name: 'tommy', age: 2, speed: '45 kphs' }

// console.log(Dog1.runs()); //tommy runs at the speed of 45 kmph



// --____________________________________--

//same method in sub class

class Dog extends Animal{
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
//same method i.e, eat() method in sub class
    eat() {
        return`modified eat(): ${this.name} is eating`
    }
    runs() {
        return `${this.name} runs at the speed of ${this.speed}`
    }
}
const Dog1 = new Dog("tommy", 2, "45 kmph")
console.log(Dog1.eat()); //modified eat(): tommy is eating