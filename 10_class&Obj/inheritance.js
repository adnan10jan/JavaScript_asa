class User{
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass) {
        super(username)
        this.email = email;
        this.pass = pass
    }
    addCourse() {
        console.log(`New course added by ${this.username}`);
    }
}

const t1 = new Teacher("adnan", "asa@123", "123acd")
t1.logMe()

const u1 = new User("saif")
u1.logMe()

console.log(t1.addCourse());
