var c = 300

let a = 100
if(true) {
    let a = 200
    const b = 203
    //console.log("inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++ function declaration ways +++++++++++++ //


console.log( addOne(3))     // we can access function whenever we declare
function addOne(num) {
    return num + 2
}


console.log(addTwo(4))      // but here we did function as exression so it should be declare always below declaration
const addTwo = function(num) {
    return num + 3
}
