// for Each loop used in array

const coding = ["js", "py", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);  
// })
coding.forEach( (item) => {
    //console.log(item);  
})

function printMe(item) {
    //console.log(item);
}
coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [      // we can access object using for each loop
    {
    language: "javascript",
    languageName: "js"
    },
    {
    language: "python",
    languageName: "py"
    },
    {
    language: "ruby",
    languageName: "rb"
    },

]

myCoding.forEach( (item) => {
    console.log(item.language);
})