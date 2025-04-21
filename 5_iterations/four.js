// forIn loop used for object iterations

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
       // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program = ["ja", "python", "rb", "cpp"]
for (const key in program) {
    console.log(program[key]);
    
}