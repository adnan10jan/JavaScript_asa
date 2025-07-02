class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}goku`
    }
    
    set password(value) {
        this._password = value
    }
}

const adnan = new User("asa@123", "saif")
console.log(adnan.email);
console.log(adnan)
console.log(adnan.password);

