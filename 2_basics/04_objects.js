//const tinderUser = new Object()     // singleton object declaration

const tinderUser = {}       // non singleton object

tinderUser.id = "111"
tinderUser.name = "asa"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);


const users = [
    {
        id: 1,
        email: "asa@123.com"
    },
    {
        id: 1,
        email: "asa@123.com"
    },
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseIntructor: "asa"
}


