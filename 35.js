//? Call() Apply()  Bind()  methods

//Call()
// const user1 = {
//     firstName: "shahid",
//     age: 22,
//     about: function () {
//         console.log(`${this.firstName}, ${this.age}`);
//     }
// }
// const user2 = {
//     firstName: "aman",
//     age: 13,
// }
// user1.about(); //shahid, 22

//here what i want is to use about method of user1 in user2, for this i have to use call() method
 
//    user1.about.call(user2); //aman, 13
//object1.uska method. call method(ye vo object hai jispe aap object1 ka method use krna chahte hai)

//!/we can use extra arguments as well and also can declare method outside an object
function about(hobby, favSinger) {
    console.log(`${this.firstName}, ${this.age}`, hobby, favSinger);
}

const user1 = {
    firstName: "shahid",
    age: 22,
    
}
const user2 = {
    firstName: "aman",
    age: 13,
}
about.call(user2, "cricket", "arijit"); //aman, 13 cricket arijit

//-----------------------------------------//

// Apply() ...> same as call() but it takes arguments in an Array
about.apply(user2, ["football", "atif"]); //aman, 13 football atif


//----------------------------------------//

// bind()
//it always return a function

const func = about.bind(user1, "singing", "bach");
func(); //shahid, 22 singing bach



//.............//
// dont do this mistake
// like if i want to store about method in another variable
// const myFunc = user1.about;
// console.log(myFunc);// undefined

//do this
const myFunc = about.bind(user1, "sing", "cric"); //shahid, 22 sing cric
myFunc();



