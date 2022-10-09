//Default parameters
//in ES6, we can assign default value to a parameter as
function addTwo(a, b = 10) {
    console.log(a+b); //15
}
addTwo(5);