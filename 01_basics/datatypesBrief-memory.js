//***********Datatypes summary***********

// there are two types of datatypes on the basis of the way data kept in memory and access it (1)Primitive or value (2)Non-Primitive or reference

//  **Primitive (the reference of memory we allocated will not the orginial but a copy of it and any change we do will also done in that copy)
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
// console.log(typeof scoreValue); // number

const isLoggedIn = false
// console.log(typeof isLoggedIn); // boolean

const outsideTemp = null
// console.log(typeof outsideTemp); // object

let userEmail;
// console.log(typeof userEmail); // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof id); // symbol
// console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber); // bigint


// **Reference or Non-Primitive (the reference of the memory we get allocated will be original)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros); //object

let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof myObj); // object

const myFunction = function(){
    console.log("Hello world");
}
// console.log(myFunction);
// console.log(typeof myFunction); // object function


// https://262.ecma-international.org/5.1/#sec-11.4.3


// **************** Memory Types ****************************                                      

// Stack (Primitive datatypes stored) : here if we declare a variable we allocated the reference of copy of the original value in memory and whatever change we commit will be in that copy only

// Heap (Non-Primitive) : here if we declare a variable we allocated the reference of original value in the memory location and the change we commit will be in it


//             example of stack memory
let myName = "ankit"
let anotherName = myName
// console.log(myName); // ankit
// console.log(anotherName); // ankit

anotherName = "sachin"
// console.log(myName); // ankit
// console.log(anotherName); // sachin
// so here if we change value of anotherName variable myName value dont change because while declaring anotherName variable value to myName we allocated the reference of copy of value of myName in memory so the change will be in copy value not in original value of myName


//            example of heap memory
let userOne = {
         email: "ankit@google.com",
         city: "sikar"
}
// console.log(userOne); // { email: 'ankit@google.com', city: 'sikar' }
let userTwo = userOne
// console.log(userTwo); // { email: 'ankit@google.com', city: 'sikar' }

userTwo.email = "jk@google.com" // in object we access by '.'
// console.log(userOne); // { email: 'jk@google.com', city: 'sikar' }
// console.log(userTwo); // { email: 'jk@google.com', city: 'sikar' }
// so here when we change value of userTwo variable userOne value also change because while declaring userTwo variable value to userOne we allocated the reference original value of userOne in memory so the change will be in original value of userOne also

// link to understand it more precisely
// https://youtu.be/7gwc-1czolw?si=5N8Z6ipktqkwlHDD
