const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8667
console.log(otherNumber.toPrecision(4));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));  //makes positive
console.log(Math.round(4.6));  //round off
console.log(Math.ceil(4.2));  //make number bigger
console.log(Math.floor(4.7)); //makes number smaller
console.log(Math.min(4, 2, 5, 10));
console.log(Math.max(4, 2, 5, 10));

console.log(Math.random());  //value btw 0 and 1
console.log(Math.random()*10 + 1); // shift value in left 
console.log(Math.floor(Math.random()*10) + 1); //value btw 1-9

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min); //btw min and max
