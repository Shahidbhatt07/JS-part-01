//Hoisting 
//it only applies in case of function definition/declaration
console.log(hello());
function hello() {
    return "hello world"
}

//it doesnt work in function expression and arrow functions
// console.log(ans); //ReferenceError
const helo = function () {
    return "hello g"
}


hellllo(); //ReferenceError: Cannot access 'hellllo' before initialization
const hellllo = () => {
    console.log("helllooooo worlldddd");
    }
