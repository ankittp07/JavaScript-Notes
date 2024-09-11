// for of

   // syntax of for of loop (here object means any datatype)
// for (const element of object) {
    
// }




// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}




// Maps (hold key-value pair, like object, but hold unique and orginial pairs and retain the order we gave unlike object)

const map = new Map()           // syntax of map

// syntax to add keys and values in map 

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")    // will not added (is not unique pair)

// console.log(map);




// for-of loop on map

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}





// for of loop on objects  
//(this objects and the object in syntax are different, it is a datatype and that one refer to all datatypes)

const myObject = {
    game1: 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

  // error, because objects are not iterable from for of loop