// block scope vs function scope
//let and const are block scope
//var is function scope

// function myApp() {
//     // var is function scope  --------- Example

//     if (true) {
//         var myVar = "hello shahid";
//       console.log(myVar);
//     } 
    
//     console.log(myVar);
// }

// myApp();

function myApp() {
    // let and const are block scope --------- Example

    if (true) {
        let myVar = "hello shahid";    //in case of const, it will also show an error because let and const are blocked scoped
      console.log(myVar);
    } 
    
    console.log(myVar); //ReferenceError: 
}

myApp();
