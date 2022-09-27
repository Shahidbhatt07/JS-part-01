//Objects inside an Array   ; it is very useful in real world applications

// const users = [
//     {userId : 1, userName : 'shahid', gender : 'male'},
//     {userId : 2, userName : 'moin', gender : 'male'},
//     {userId : 3, userName : 'shaani', gender : 'female'}
// ]

// console.log(users);
// for(let user of users){
//     console.log(user);
// }

// for(let user of users){
//     console.log(user.gender);
// }


//Nested Destructuring in Objects
const users = [
    {userId : 1, userName : 'shahid', gender : 'male'},
    {userId : 2, userName : 'moin', gender : 'male'},
    {userId : 3, userName : 'shaani', gender : 'female'}
]
//this is destructuring in an array
// const [user1, user2, user3 ] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);


//now if i want to destructure from an object
// const [{userId}, {userName}, {gender} ] = users;
// console.log(userId);
// console.log(userName);
// console.log(gender);

// replacing variable  names for example :-->>>> userId:User1Id
const [{userId:User1Id, userName, gender}, {userName:User2Name}, {gender:User3Gender} ] = users;
console.log(User1Id, userName, gender ); //1 shahid male
console.log(User2Name); //moin
console.log(User3Gender); //female