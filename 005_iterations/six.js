// const coding = ["js", "cpp", "py", "ruby"]

// const newVar = coding.forEach( (item) => {
//     console.log(item);
    
// })

// console.log(newVar);  // undefined

// for each does not return anything //

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4  // return is important for paranthesis
// })


// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]