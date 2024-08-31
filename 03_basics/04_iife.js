// Immediately Invoked Function Expressions (IIFE)
   // we use it to immediately invoke or execute the function
   // and to avoid global scope pollution in our function scope


   // syntax of iife - ()(); - semicolon is important to end the iife and write another iife or other code 
// this is named iife
(function chai(){
    console.log(`DB CONNECTED`);  // not talking about this ;
})();


// we can do without semicolon like this also for a single iife, another iife after it will give error, to avoid that add ; after ()
/*
(function chai(){
    console.log(`DB CONNECTED`);
})()
*/


// but both ways will give error
 /*  
(function chai(){
    console.log(`DB CONNECTED`)
})();  

(function chai(){
   console.log(`DB CONNECTED`)
})()  
*/


// this is unnamed iife
// we can add parameter and arguments like this in iife and also use arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
