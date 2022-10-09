// Parameter Destructuring
//it is used with objects
//it is widely used in React

const person = {
    firstName: "shahid",
    gender: "male",
    age: 23,
}

// dont need this one
// function myDetails(obj) {
//     console.log(obj.firstName);
// }
// myDetails(person);


function myDetails({ firstName, gender, age }) {
    console.log(firstName); //shahid
    console.log(gender); //male
    console.log(age); //23
}
myDetails(person);