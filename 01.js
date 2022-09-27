//for loop
const fruits = ["mango", "apple", "grapes"];
console.log("here we go with for loop");
for(i =0; i < fruits.length;  i++){
    console.log(fruits[i]);
}


// while loop
console.log("here we go with whhile loop");
i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

//for of loop
const vegetables = ["carrot", "capsicum", "onion"];
console.log("here we go with for of loop and we store the data in another array named as vegs:");
const vegs = [];
for (let veg of vegetables){
    vegs.push(veg.toLocaleUpperCase());
}
console.log(vegs);


//for in loop
const furniture = ["chaira", "bed", "tables", "almera"];
for (let fur in furniture){
    console.log(fur);  //for in helps us to give the index numbers 
}

//now if we want to find the elements also, we can
for (let furs in furniture){
    console.log(furniture[furs]);
}

//store in new array
let furni = [];
for (let furs in furniture){
    furni.push(furniture[furs].toLocaleUpperCase());
}
console.log(furni);