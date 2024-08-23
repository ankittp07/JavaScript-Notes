const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 
   // not a proper way to merge two arrays because the second array will merge in first one as an single element itself

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);
   // way to access the elements of merged array, here dc_heros became 3rd element(as we know element of array can be an array also) of marvel_heros


// const allHeros = marvel_heros.concat(dc_heros)
  // more proper way to combine two or more arrays, since it merge all array and give a new array so we need to hold that array in a variable

// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]
  // but spread operator is more preferrable to combine two or more arrays, which spread all elements of arrays first and then give a new array including all elements

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
  // spread out all elements if we get arrays in array and give a new array with all elements, here parameter can be given at what depth(no. of arrays in array) you want to spread out which is infinity here
console.log(real_another_array);




   // will frequently use in tasks like data scrapping

      // in which the data can be string, number,... but we need it in array to run operations on it, so by methods we can ask whether its array or can convert the data in array

console.log(Array.isArray("Hitesh")); 
  // to ask whether the value we pass in method () is array or not

console.log(Array.from("Hitesh"))
  // convert the value in array that we pass in method ()

console.log(Array.from({name: "hitesh"}))
  // interesting output which is an empty array [] because it cant convert the object we have to specify whether we want to covert the key or values of object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
  // convert into array