const user = {
    username: "Adnan",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "san"
// user.welcomeMessage()
//console.log(this);

function asa() {
    let username = "adnan"
    console.log(this.username); 
}
//asa()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => (num1 + num2)        // this is implicit return mean 'return' not required

//console.log(addTwo(3, 4))