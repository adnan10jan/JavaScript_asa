for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
    }
    // console.log(element);
}

for (let i = 0; i <= 3; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 3; j++) {
        // console.log(`inner loop value: ${j} & outer loop ${i}`);      
 }
}

const myArray = ["flash", "superman", "batman"]
console.log(myArray.length);

for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}