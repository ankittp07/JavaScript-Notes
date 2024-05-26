// we cant convert any datatype into null of undefined

/* conversion string to number and boolean */
let score = "ankit"
// types of typeof
// console.log(typeof score); //string
// console.log(typeof(score));
// console.log(score); //ankit
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); // NaN(not a number)
// (typeof - string) => (typeof - number)
// score = "33" => conversion(in number) output - 33 
// "33abc" => NaN(not a number)

let isLoggedIn = "ankit"
// console.log(typeof isLoggedIn); //string
// console.log(isLoggedIn); //ankit
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); //true
//  console.log(typeof booleanIsLoggedIn); //boolean
// "" => false
// "ankit" => true


/* conversion number to string and boolean */
let someNumber = 33
// console.log(someNumber); //33
// console.log(typeof someNumber); //number
let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber); //string

// 1 => true; 0 => false; any number => true (number to boolean)


/* conversion boolean to string and number */
let isLogged = true
// console.log(isLogged); //true
// console.log(typeof isLogged); //boolean
let booleanInString = String(isLogged)
// console.log(typeof booleanInString); //string
// console.log(booleanInString); //true

// true => 1; false => 0 (boolean to number)


/* conversion null to number, string, boolean*/
let fileName = null
// console.log(fileName); //null
// console.log(typeof fileName); //object
let nullNumber = Number(fileName)
// console.log(nullNumber); //0
// console.log(typeof nullNumber); //number
let nullString = String(fileName)
// console.log(nullString); //null
// console.log(typeof nullString); //string
let nullBoolean = Boolean(fileName)
// console.log(nullBoolean); //false
// console.log(typeof nullBoolean); //boolean
//undefined doesnt work.


/* conversion undefined to number, boolean, string */
let docName // (output of "let docName = undefined" will also same)
// console.log(docName); //undefined
// console.log(typeof docName); //undefined
let undefinedNumber = Number(docName)
// console.log(undefinedNumber); //NaN
// console.log(typeof undefinedNumber); //number
let undefinedString = String(docName)
// console.log(undefinedString); //undefined
// console.log(typeof undefinedString); //string
let undefinedBoolean = Boolean(docName)
// console.log(undefinedBoolean); //false
// console.log(typeof undefinedBoolean); //boolean


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

