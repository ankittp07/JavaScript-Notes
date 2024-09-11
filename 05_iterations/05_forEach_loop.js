// forEach loop

// this loop is injected as methods in array
// we will use forEach loop on arrays mostly
// it is a higher order array loop

     // syntax  (forEach loop takes callback function)
// array.forEach(element => {
    
// });





const coding = ["js", "ruby", "java", "python", "cpp"]
     // another syntax since it take function inside it, but we dont put name(we dont need to store it) of the function(since its a callback funtion)

// coding.forEach( function (val){
//     console.log(val);
// } )

    // here we can name our parameter (which is val here) and that that will go to all elemets in the array in order of increament will store them (which we print here)



    
    // syntax with arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )



// syntax with function declared outside 

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // only reference not execution




// can add other parameters also (access of different values )

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )







// forEach loop used a lot in arrays which have objects as elements

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )