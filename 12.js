//functions inside functions
const myFunc = () => {
    function greeting() {
     console.log("good Morning");
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    let ans = addTwo(2, 3);


    const mul = (n1, n2) => n1 * n2; 






   
    greeting();  //good Morning

    console.log(ans); //5
    console.log(mul(2,5)); //10

    console.log("this is my function");//5
}
myFunc(); //this is my function