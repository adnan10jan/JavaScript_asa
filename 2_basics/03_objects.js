 

 // object literals //

 const mySum = Symbol("key1")       // symbol used only sqaure brackets if have to access

 const JsUser = {
    name: "Adnan",
    "full name": "adnan saif",
    age: 23,
    [mySum]: "mykey1",
    location: "bengaluru",
    email: "asa@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sat"]
 }

//  console.log(JsUser.email);
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mySum]);

 JsUser.greeting = function() {
    console.log("Hello JS user");
 }
 JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

 
 
 
  