class User{
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const asa = new User("adnan")
console.log(asa.createId())

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const t1 = new Teacher("saif", "asa@111")
console.log(t1.createId())