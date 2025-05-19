const promiseOne = new Promise(function(resolve, reject){
    // do async task
    // do db calls, cryptography, network calls
    setTimeout(function() {
        console.log("async task is cmpleted");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('promise consumed');
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async tas 2 completed');
        resolve()
    }, 1000)

}).then(function() {
    console.log('prmised 2 resolved')
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "asa", email: "asa@aaa.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user); 
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "adnan", pass: "aaa"})
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: js went wrong')
        }
    }, 1000)
})

// async function consumePromise() {
//     const response = await promiseFive
//     console.log(response);

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromise()

// async function getAllUser() {
//     const response = await fetch('https://api.github.com/users/adnan10jan')
//     //console.log(response);
//     const data = await response.json()
//     console.log(data);
// }
// getAllUser()

fetch('https://api.github.com/users/adnan10jan')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})




