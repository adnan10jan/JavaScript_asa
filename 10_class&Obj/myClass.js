// ES6

class User {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass
    }

    encryptPassword() {
        return `${this.pass}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "adnanasa@user.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

