const score = 100
// console.log(score); // 400(typeof is number)

const balance = new Number(100)
// console.log(balance); // [Number: 100](object)

// console.log(score==balance); // true
// console.log(score===balance); // false


// console.log(balance.toString());
 // 100(typeof string, so can use additional properties of string)

// console.log(balance.toString().length); // 3

// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // 123.9 (interesting property)
// console.log(otherNumber.toPrecision(3)) // 124
// console.log(otherNumber.toPrecision(2)) // 1.2e+2

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 
// 10,00,000 (by default US standard)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4 (turns value from -ve to +ve only)
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8


// console.log(Math.random()); // gives a random number between 0 to 1

// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) + 1);
// here we want a number to be 1 or greater, but if the random number comes 0.01 and multiply by 10 it becomes 0.1 and from floor property it will become 0, so to avoid to be 0 we will add 1



                 /* important frequently usable syntax */
const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// use (max-min) to limit the range between the given condition and (+1) and mentioned above and (+ min) to limit the min value to be 10




/* to learn about more properties of num and math console it and read the prototypes mention there from MDN */