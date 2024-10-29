const coding = ["js", "cpp", "py", "ruby"]

// coding.forEach( function(val){
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);  // using arrow function
    
// } )

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// //js 0 [ 'js', 'cpp', 'py', 'ruby' ]
// // cpp 1 [ 'js', 'cpp', 'py', 'ruby' ]
// // py 2 [ 'js', 'cpp', 'py', 'ruby' ]
// // ruby 3 [ 'js', 'cpp', 'py', 'ruby' ]
// })

const myCode = [
    {
        codingLanguage: "javascript",
        fileName: "js"
    },

    {
        codingLanguage: "java",
        fileName: "java"
    },

    {
        codingLanguage: "python",
        fileName: "py"
    }
]

myCode.forEach( (item) => {
    console.log(item.codingLanguage);
    // javascript
    // java
    // python
})