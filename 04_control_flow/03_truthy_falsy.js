// those values which are assume to be true or false


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values (every value except falsy values)
// "0", 'false', " ", [], {}, function(){}, .....




// way to check whether a array is empty or not

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }




// way to check whether a object is empty or 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}





// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);






// Terniary Operator, somehow same as if-else

// condition ? true : false     // syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")








// false == 0   output is true
// false == ''  true
// 0 == ''      true
// false === 0  false