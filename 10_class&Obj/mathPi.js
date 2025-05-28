const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desc);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "adnan",
    price: 100,
    isAvailabe: true,

    orderChai: function() {
        console.log("ordered coffee");
    }

}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {              // when we iterate object directly it throws error so we use " Object.entries " 
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
}