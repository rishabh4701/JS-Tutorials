let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN, but type is number
// true => 1, false => 0


let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//************operations**************//

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);
