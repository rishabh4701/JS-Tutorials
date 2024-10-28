// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  // { id: '123abc', name: 'Rishabh', isLoggedIn: false }

const regularUser = {
    email: "rishabh@gaj.com",
    fullname: {
        userfullname: {
            firstname: "Rishabh",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname); //{ userfullname: { firstname: 'Rishabh', lastname: 'Singh' } }
// console.log(regularUser.fullname.userfullname.firstname); // Rishabh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj = {1: "a", 2: "b"}

// const obj3 = {obj1, obj2}  // // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2)  // {}= empty object which stores all objects
const obj3 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b'}
// console.log(obj3); 

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  // [ '123abc', 'Rishabh', false ]
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Rishabh' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


//*************** Destructuring ******************/
const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "rish"
}

// const {courseInstructor} = course
const {courseInstructor: Instructor} = course
// console.log(courseInstructor); // rish
console.log(Instructor); // rish