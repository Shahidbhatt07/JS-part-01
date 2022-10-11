// Function returning Function
function myFunc() {
  function myFunc2() {
    console.log("hello world");
  }
  return myFunc2;
}

let ans = myFunc();
console.log(ans); //[Function: myFunc2]
ans(); //hello world

//HOF:
//when we "accept a funtion as an input" or "we return the function" or "we operate both operations in a function", then this is known as higher order function
