let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())
console.log(typeof myDate);
console.log(myDate.getMonth());
myDate.toLocaleString('default', {
    weekday: "long",
})

let myCreatedDate = new Date("10-26-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //in mili sec

console.log(Math.floor(Date.now()/1000));  // in seconds

