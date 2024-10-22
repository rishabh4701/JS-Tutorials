const accountId = 14222
let accountEmail = "rishabh@gamil.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 4823974   Not allowed

accountEmail = "haha@gmail.com"
accountPassword = "jshdajk"
accountCity = "Mumbai"
console.log(accountId);

// Prefer not to use var : because of issue in block scope and functional scope

console.table([accountId, accountCity, accountEmail, accountPassword, accountState])