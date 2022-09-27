//object Destructuring
const band = {
    bandName : "led zappelin",
    famousSong : "Stairs in heaven",
    year : 1968,
    anotherfamousSong : "kashmir" 
}

//method 1
// let bandName = band.bandName;
// console.log(bandName); //led Zappelin

//method2  important..... used in react also

// let {bandName, famousSong} = band;
// console.log(bandName); //led zappelin

//if i want to store the data in another variables
let {bandName:var1, famousSong:var2 } = band;
// console.log(bandName); //ReferenceError: bandName is not defined
// console.log(var1); //led zappelin

// storing the rest key value pairs in another variable
let {bandName , famousSong, ...restProperties} = band ;
console.log(restProperties); //{ year: 1968, anotherfamousSong: 'kashmir' }