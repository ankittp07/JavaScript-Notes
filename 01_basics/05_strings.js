
const name = "ankit"  // one way to declare a var with string value
const repoCount = 1

// console.log(name + repoCount + " Value"); 
// not a recommended way of concatenation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// use string interpolation (`${}`) method instead 

const gameName = new String('ankit-vscode-com')  
// another way to declare a string

// console.log(typeof name) // string (but under the hood object)
// console.log(typeof gameName) // object



/*                   Prototypes of string 
(in console of browser declare and get value of gameName[with only that syntax] one can get all prototypes but can access on every string despite the way we declare it) */



// console.log(gameName[0]); // a (string)
// console.log(name[1]); // n (string)


// console.log(gameName.__proto__); 
// one way to access to all prototypes[but doesn't need this syntax, can access directly with .(prototype name)]


// console.log(gameName.length); // 16


// console.log(gameName.toUpperCase()); 
// ANKIT-VSCODE-COM (but orginal value of gameName doesnt change because stack memory[string])


// console.log(gameName.charAt(2)); // k
// console.log(gameName.indexOf('t')); // 4


const newString = gameName.substring(0, 4)
// console.log(newString); // anki (starts with 0 and end at 3)


const anotherString = gameName.slice(-11, 9)
// console.log(anotherString);
 // -vsc (in slice we can add negative index, in negative it starts from end of string which is -1 and then calculate and ending index doesnt included which here is 9)


const newStringOne = "   ankit    "
// console.log(newStringOne); //      ankit   

// console.log(newStringOne.trim()); 
// ankit (trims the white spaces and new lines)


const url = "https://ankit.com/ankit%20vscode"

// console.log(url.replace('%20', '-')); 
// https://ankit.com/ankit-vscode


// console.log(url.includes('a nkit')); // false


// console.log(url.includes('ankit')); // true


// console.log(gameName.split('-')); 
// [ 'ankit', 'vscode', 'com' ] (gives array of three strings split by '-', we can split by anything(present in string) and it will give a array of strings)


//The concat() method of String values concatenates the string arguments to this string and returns a new string.
const str1 = 'Hello';
const str2 = 'World';
// console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

const hello = "Hello, ";
// console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.



          /* to learn about more methods of strings search on MDN */
