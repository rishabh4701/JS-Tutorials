for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number.");
        
    }
    // console.log(element);
    
}

for (let i = 0; i < 3; i++) {
//    console.log(`Outer loop value: ${i}`);
   for (let j = 0; j < 3; j++) {
    // console.log(`Inner loop value ${j} for outer loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
    
   }
    
}

let myArray = ['flash', 'ironman', 'strange', 'loki']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Detected 5");
//         break  // comes out of loops 
//     }
//     console.log(`Value of i is ${i}`);
        
// }


for (let i = 1; i <= 20; i++) {
    const element = i;
    if (element == 5) {
        console.log("Detected 5");
        continue  // do not prints 5 for once 
    }
    console.log(`Value of i is ${i}`);
        
}