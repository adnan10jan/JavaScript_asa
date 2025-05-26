function setUserName(username) {
    this.username = username
    console.log('called');
    
}

function createUser(username, email, pass) {
    setUserName.call(this, username)
    this.email = email
    this.pass = pass
}

const asa = new createUser("adnan", "asa@122", "abcd" )

console.log(asa);
