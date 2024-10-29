var c = 300
let a = 10
if (true) {
   let a = 100
   const b = 200
  // console.log("INNER: ", a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "rishabh"

  function two() {
    const website = "yt"
    // console.log(username);
  }
  // console.log(website);

  two()
  
}
// one()

if (true) {
  const username = "rishabh"
  if (username === "rishabh") {
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website); // err
}
// console.log(username); // err


addone(5)  // no error

function addone(num) {
  return num + 1
}

// addTwo(6)  // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2
}
