const user = {
    username: "adnan",
    loginCount: 8,
    signrdIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, isLoggedIn, loginCount) {
    this.username =  username,
    this.isLoggedIn = isLoggedIn,
    this.loginCount = loginCount
    //return this

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

let data = new User("adnan", 13, 11)
let data2 = new User("asa", 11, 23)
console.log(data.constructor)
//console.log(data2)