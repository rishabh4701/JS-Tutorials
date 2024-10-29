const arrow = {
    username: "rishabh",
    price: "999",

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this); 
        // {
        // rishabh, welcome to website
        //   username: 'rishabh',
        //   price: '999',
        //   welcomeMessage: [Function: welcomeMessage]
        // }
        // sam, welcome to website
        // {
        //   username: 'sam',
        //   price: '999',
        //   welcomeMessage: [Function: welcomeMessage]
        // }
        
    }

}

// arrow.welcomeMessage() // rishabh, welcome to website
// arrow.username = "sam"
// arrow.welcomeMessage() // sam, welcome to website
// console.log(this);  // {}

// function chai() {
//     let username = "rishabh"
//     console.log(this.username); // undefined , return because of function, works properly for objects
//     console.log(this);
    
// }

// chai()

// = () => {}  ...Arrow function representation

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  (num1 + num2) 
// const addTwo = (num1, num2) =>  ({username: "rishabh"}) 

console.log(addTwo(3,5)); // 8
