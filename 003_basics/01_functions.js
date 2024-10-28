// function myName(){
//     console.log('R');
//     console.log('I');
//     console.log('S');
//     console.log('H');
//     console.log('A');
//     console.log('B');
//     console.log('H');
// }

// myName()  // name is reference and paranthesis are execution

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2); // NaN
    // let result = number1 + number2
    // return result // Result:  8
    return number1 + number2  // Result:  8 
}
// addTwoNumbers()

const result = addTwoNumbers(3,5)
// console.log("Result: ", result); // Result:  undefined

function loginUserMessage(username) {
    if (!username) {
        // console.log("Please enter a username"); //Please enter a username
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rishabh")); // Rishabh just logged in
// console.log(loginUserMessage()); // undefined just logged in

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 232, 532, 2142)); // [ 200, 232, 532, 2142 ] use rest operater ...

const user = {
    username: "rihaj",
    price: "999"
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is rihaj and price is 999
}

// handleObject(user)
handleObject({ // Username is sam and price is 242
    username: "sam",
    price: "242"
})

const myNewArray = [200, 333, 132, 21]

function returnSeconfValue(getarray) {
   return getarray[2]
}

console.log(returnSeconfValue(myNewArray)); // 132
console.log(returnSeconfValue([100, 200, 500, 300]));  // 500
