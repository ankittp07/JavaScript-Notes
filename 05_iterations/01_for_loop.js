// loops are also called iterations


// for loop - syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);   // can't access due to block scope



for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and outer loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}





let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}




// break and continue

// break will used to stop or break the code flow, which means code after that in the particular scope will not be executed

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }



//continue is used to skip that value if paticular condition is true and executed the code same as before after that

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}