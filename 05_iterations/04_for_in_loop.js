// for in loop (objects are iterable here)

// syntax

// for (const key in object) {
// }



// for in loop on objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// to get key in objects by for in loop
for (const key in myObject) {
    //console.log(key);
}


// to get both key value in an object
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}




// for in loop on arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);
}

for (const key in programming) {
    //console.log(programming[key]);
}



// for in loop on Maps


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for (const key in map) {
//     console.log(key);
// }

// maps are not iterable by for in loop