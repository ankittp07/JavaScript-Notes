
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName       // reference of function
// sayMyName()       // execution of the function, can also stored into a variable



     // the values in () are called parameters
/*
 function addTwoNumbers(number1, number2){
     console.log(number1 + number2);
 }
     */

// addTwoNumbers(3, null)            // here values in () called arguments
// let outcome = addTwoNumber(3,7)  // it will executed and give output 10
// console.log(outcome);    // but it wont be executed, for this we need to return




// lil bit of imp and tough to understand
// if there is any statement after return it wont be executed
// the result variable in function statement and outside the function is not giving error for declaring again of same name variable because of function scope
// we can only store the function output into a variable outside it by return but not through console

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(3,5)    // no output because we havent print the value yet
const result = addTwoNumbers(3, 5)     
// console.log("Result: ", result);




  
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
    // if we dont give any argument then output will be undefined for the parameter, for this we can set default value also




// if we have one parameter but argument value are more than one, then we can combine all value in single parameter with rest operator(same as spread but usecases and name are differ on basis of situation) and output will be array
function calculateCartPrice(num1){
    return num1
}
  // console.log(calculateCartPrice(200, 400, 500, 2000))

  function calculateCartPrice(...num1){
    return num1
}
  // console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))






// pass objects and arrays in function
const user = {
    username: "hitesh",
    price: 199
}

      // write function like this(generic) to reuse it
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
   // can put name of object and even the object itself in argument


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(anyArray){
    return anyArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));