// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString())

// console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleString());


let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate4.toLocaleString());


          /* used in quiz, poll, booking websites */

let myTimeStamp = Date.now() // another syntax to declare date(object)
// console.log(myTimeStamp); 
  // gives total time from default to now in millisec

// console.log(myCreatedDate4.getTime());
 // gives total time from default to declared time in millisec

// console.log(Math.floor(Date.now()/1000));
 // to convert millisec to sec but compare the time always in millisec


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // +1 because month start from 0(jan) in js
// console.log(newDate.getDay()); // here dont add one because 0(sunday)

// `${newDate.getDay()} and the time `
// its how we use date and time with string interpolation


       /* we will use this method more frequently so imp. */
console.log(
    newDate.toLocaleString('default', {
    weekday: "long",
    
})
)
// to customize the method's output