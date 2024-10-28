const marvel = ['thor', 'ironman', 'hulk']
const dc = ['joker', 'flash', 'superman']

// marvel.push(dc);
// console.log(marvel); //[ 'thor', 'ironman', 'hulk', [ 'joker', 'flash', 'superman' ] ]
// console.log(marvel[3][1]);  //flash

const allHeroes = marvel.concat(dc)
// console.log(allHeroes); // [ 'thor', 'ironman', 'hulk', 'joker', 'flash', 'superman' ]

const all_new_heros = [...marvel, ...dc] //[ 'thor', 'ironman', 'hulk', 'joker', 'flash', 'superman' ]
// console.log(all_new_heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 0, 12]]
const realAnotherArr = anotherArr.flat(Infinity);

console.log(realAnotherArr); //[1, 2, 3, 4, 5,6, 7, 8, 9, 0,12]

console.log(Array.isArray('rishabh')); //false not an array
console.log(Array.from('rishabh')); // makes an array
console.log(Array.from({name: 'rishabh'}));  //interesting , gives empty arr

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
