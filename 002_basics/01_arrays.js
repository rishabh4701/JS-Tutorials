const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(3));
// console.log(myArr);

const newArr = myArr.join()
// console.log(newArr);  // 1,2,3,4 = binds arr and convert to string
console.log("A: ", myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B: ", myArr );

const myn2 = myArr.splice(1,3)
console.log("C: ", myArr);

console.log(myn2);

