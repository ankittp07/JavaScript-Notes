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