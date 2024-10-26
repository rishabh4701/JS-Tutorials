// Primitive
// 7 types: string, number, bigInt, boolean, null, undefined, symbol

const score = 100;
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3246872206738623098362736482768372748627n // bigInt

// References(Non- primitive)
// Array, Objects, Functions

const name = ["rishabh", "harsh", "naitik"]
let myObject = {
    name: "rishabh",
    age: 20,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);

// ******************************************************************************** //
let myYoutubename = "rishabhsingh"
let anothername = myYoutubename
anothername = "singhrishabh"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rish@ybl"

console.log(userOne.email);
console.log(userTwo.email);



