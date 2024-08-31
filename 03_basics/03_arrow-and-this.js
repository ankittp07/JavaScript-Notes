// this refers to current context, and in given example current context inside a scope is the values into it only, and which is in overall a object named user

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



// console.log(this);
  // here this(current context, which is global scope) output will be a empty object, because we are in a node environment, output will be different in browser devtools(console), because in browser the global object is window





/*
function chai(){
    let username = "hitesh"
        // console.log(this);
    console.log(this.username);   // undefined
}

chai()
*/
   // here this will give a different output, since it is in a function.   But we can access any value using this in object only not in function





/*
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
//     console.log(this);
}
*/


// this is an arrow function syntax '() => {}' which we can hold into a variable
// in arrow function output of this is different compare to the above function 

/*                    
const chai =  () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
}
chai()
*/





// explicit return or basic method of return in arrow function- here we have to mention return keyword
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
    console.log(addTwo(3, 4))
*/





// implicit return in arrow function- we dont need to mention return keyword
/*
 const addTwo = (num1, num2) =>  num1 + num2
     console.log(addTwo(3, 4))
*/




// another method of implicit return in arrow function
/* 
const addTwo = (num1, num2) => ( num1 + num2 )
    console.log(addTwo(3, 4))
*/




// here although {} is object but it will be considered function syntax so we have to mention return keyword to return the value
/*
const myName = () => {username: 'ankit'}
console.log(myName()); // undefined
*/


// this is how we can return objects in implicit return in arrow function
/*
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))
*/


