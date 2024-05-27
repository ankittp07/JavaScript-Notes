// we cant convert any datatype into null or undefined

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
// console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(3/3);
// console.log(6%12);

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3); //hello hitesh
//console.log(str1 + " myself" + str2 ); //hello myself hitesh
//console.log(str1 + "myself" + str2); //hellomyself hitesh

// console.log("1" + 2); //12
// console.log("1" + "2" + "3"); //123
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 (if string comes before js will consider all further values as string and in string we dont add put write them together we'+' is used.)
// console.log(1 + 2 + "2"); //32(but this isn't good practice use'()' like below)
// console.log( (3 + 4) * 5 % 3); //2
// console.log((3+4)*(5%3)); //14


// ** '+' is addition and '++' is increment '-' is subtraction and '--' is decrement

// console.log(+true); // 1 (boolean value in number and '+' represent increament in that value)
// console.log(++true); // error
// console.log(+""); // 0 (boolean in number)
// console.log(true+); // error
// console.log(true++); // error

/*          increment operators          */

// **Postfix increment** : If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value 'before' incrementing. 
let x = 3;
const y = x++;
// console.log(x, y); // x is 4; y is 3
let x2 = 3n;
const y2 = x2++;
// console.log(x2, y2); // x2 is 4n; y2 is 3n

// **Prefix increment** : If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value 'after' incrementing.
let a = 3;
const b = ++a;
// console.log(a, b);  // a is 4; b is 4
let a2 = 3n;
const b2 = ++a2;
// console.log(a2, b2);  // a2 is 4n; b2 is 4n

let boolean = true
// console.log(boolean++); // 1
// console.log(++boolean); // 3
// console.log(+boolean); // 2

let gameCounter = 100
++gameCounter; //101 (here we can add '++'[not '+'] before and after)
gameCounter++; // 101
// console.log(gameCounter); // 102 (if use both declarations)



let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not a good practice to define like this because code should clean and readable
// console.log(num1, num2, num3); // 4 4 4

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
