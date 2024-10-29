const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User Power: ${power}`);
    
}

const balance = 1000
// if(balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}
