// Optional Chaining 
const user = {
    name: "Shahid",
    // address: { hosueNumber: 17 }  //if not present this key 
}

console.log(user.name);
// console.log(user.address.hosueNumber); //error

//how to overcome from this
console.log(user.address); //undefined

// console.log(user.address.houseNumber); //error
console.log(user.address?.houseNumber) // undefined    <<... this was the result we want
console.log(user.address?.houseNumber?.phoneNumber?.landline?.pinCode); // undefined
// it means>> kya user mai address hai aur kya usme houseNumber b hai aur kya usme phoneNumber b hai and so on ....... 
  //this is all optional chaining