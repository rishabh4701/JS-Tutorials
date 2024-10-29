const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => (acc + curr), 0)
// console.log(myTotal);

// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

const shoppingCart = [
    {
        course: "js",
        price: 999
    },
    {
        course: "py",
        price: 91111
    },
    {
        course: "cpp",
        price: 9932
    },
    {
        course: "java",
        price: 8273
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
