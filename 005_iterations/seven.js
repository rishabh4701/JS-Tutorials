const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)

// const newNums = myNumbers.map( (num) => {return num + 10})


// we can chain as many as we want

const newNums = myNumbers
                .map( (num) => num * 10) // new arr with 10 multiplied
                .map( (num) => num + 1)  // 1 is added in new array
                .filter( (num) => num > 40)
                // [
                //     11, 21, 31, 41,  51,
                //     61, 71, 81, 91, 101
                // ]
console.log(newNums);
