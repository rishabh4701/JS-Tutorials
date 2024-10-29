// for in

const myObj = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
   
}

let prog = ["js", "rb", "cpp", "java", "py"]

for (const key in prog) {
    console.log(prog[key]);
    
}

// Maps are not iterative thus for in does not works 