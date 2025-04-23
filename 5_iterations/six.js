const coding = ["js", "py", "java", "cpp"]

const val = coding.forEach( (item) => {
    //console.log(item);
    return item
})
//console.log(val);

// filter uses

const myNums = [1,2,3,4,5]

const newNums = myNums.filter( (num) => {
    return num > 2
})
console.log(newNums);


 