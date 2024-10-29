// for of

let arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(`Value of arr is ${num}`);
    
}

let greetings = "Hello,world"
for (const greet of greetings) {
    // console.log(`Char of greetings are ${greet}`);
    
}

// Maps => no redundancy

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value  ); 
// IN :- India
// USA :- United States of America
// FR :- France
    
}