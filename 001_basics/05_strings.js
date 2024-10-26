const name = "rishabh"
const repoCount = 40
console.log(`My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('abcdefgh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);  //abcd

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  // abcd

const newStringOne = "    rish     "
console.log(newStringOne.trim());  //rish
