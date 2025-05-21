let myName = "Adnan"

console.log(myName.length);


let myHeroes = ["thor", "ironman"]

let heorPower = {
    thor: "hammer",
    ironman: "IQ",

    getThorPower: function() {
        console.log(`thor power is ${this.thor}`);
    }
}

// Object.prototype.adnan = function() {
//     console.log(`Adnan is available in all objects`);
// }

heorPower.adnan()

