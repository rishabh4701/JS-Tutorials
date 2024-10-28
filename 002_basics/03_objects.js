// singleton
// object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Rishabh",
    "full name": "Rishabh Singh",
    age: 20,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "rishabh4701@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); //rishabh4701@gmail.com
// console.log(jsUser["email"]); //rishabh4701@gmail.com
// console.log(jsUser["full name"]); //Rishabh Singh
// console.log(jsUser[mySym]); //[Symbol(key1)]: 'myKey1'

// jsUser.email = "rishabh@gml.com"
// console.log(jsUser);
// Object.freeze(jsUser) // to freeze the object and cannot change it
// jsUser.email = "jask@gmail.com" // not executed

jsUser.greeting = function() {
    console.log("Hello Bhai, ");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Bhai, ${this.name}`);
    // console.log(`Hello Bhai, ${jsUser.age}`);
}
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting());  // Hello Song
console.log(jsUser.greetingTwo());  // Hello Bhai, Rishabh
 