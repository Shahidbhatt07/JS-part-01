//Callback Functions

function myFunc2(name) {
    console.log("hello there");
    console.log(`hello my name is ${name}`);
}


function myFunc(Callback) {
    console.log("hello world");
    Callback("shahid");
}


 myFunc(myFunc2);
