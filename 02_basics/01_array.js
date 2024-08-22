// elements of array can be string, number, boolean, .....

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // another way to declare array

// console.log(myHeros[1]); 
  // naagraj (we can only access element of array from index(which start from 0) value not from directly value of element itself)


                       /*   Array methods   */

// myArr.push(6)            // add value in the end of the array
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()              // remove the last value of the array
// console.log(myArr);

// myArr.unshift(9)      // add value in starting of array
// console.log(myArr); 

// myArr.shift()         // remove value from starting of array
// console.log(myArr);

// console.log(myHeros.includes("shaktiman"));
  // true (to ask whether the value is in the array or not)


// console.log(myHeros.indexOf("naagraj"));     // 1

// const newArr = myArr.join()   // add all the elements of array into a string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr)


                        // slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)

// console.log("C ", myArr);
// console.log(myn2);


/* slice returns a copy of a section of array, in which start index included and end index dont included but doesnt change the value of original array

while splice returns a section of array in which start and end index both included but also manuplate or change the original value of array by removing the splice value from original array */