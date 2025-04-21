// forOf loop //

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each char is: ${greet}`);
}

// map

const map = new Map()
map.set("us", "united states")
map.set("IN", "India")
map.set("Fr", "France")

//console.log(map);

for (const [key, val] of map) {
    //console.log(key, ': ', val)
}

const myObject = {
    'game': 'NFS',
    'game2' : 'spiderman'
}
for (const [key, val] of myObject) {        // here for Of loop not iterable only maps is iterable
    console.log(key, ':', val);
    
}