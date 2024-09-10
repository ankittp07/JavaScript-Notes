// syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// value doesn't need to be string, it can be any datatype  
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


// here default used if no value in case match the key value , like else in if-else

// here break keyword, break the control flow, if we don't use break then after the value match of any case, it will print all values below it without checking the condition except default
