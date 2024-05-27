"use strict"; 
 // treat all JS code as newer version(nowadays browsers automatically treat js code as newer version but its good to mention)

// alert( 3 + 3)
// we are using nodejs, not browser(in browser or while bind js file in html the output will be a popup with value 6 but not in nodejs.)

console.log(3 
    +
     3) // code readability should be high(so not appropriate to write like this although js avoid spaces and start every element from new line)
console.log(3+3)
console.log("Hitesh")


/*           primitive or value datatypes         */

// number => 2 to power 53(limit)
// bigint => use for number for bigger limit than above
// string => ""(more preferable) or ''
// boolean => true/false
// null => standalone value(representation for an empty value because here neither 0 is consider as empty nor "")
// undefined => value not assigned yet
// symbol => unique components

let age = 18
let userName = "hitesh"
let isLoggedIn = false
let mobileNumber = null
let state;
console.log(state); // undefined
console.log(userName); // output-hitesh
console.log("hitesh"); // hitesh

// object datatype :(will discuss later)

console.log(typeof 18); // number
console.log(typeof age); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
