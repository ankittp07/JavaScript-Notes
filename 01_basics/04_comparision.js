// console.log(2 > 1); // true 
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true (!= means not equal)

// (string get converted into number while comparing)
// console.log("2" > 1); // true
// console.log("02" > 1); // true

/* for clean code (avoid using null and undefined in comparision because of inconsistency of js because sometimes it convert them in NaN and othertimes in zero) */

// console.log(null > 0); // false
// console.log(null == 0); //false
// console.log(null >= 0); // true
// the reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why (3)null >= 0 is true and (2)null == 0 is false

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

// === (it compare strictly without converting the datatypes)

// console.log("2" === 2); // false
// console.log("2" == 2); // true

// in boolean true converted[in numbers] as 1 and false as zero
// console.log(true > 1); // false
// console.log(false == 0); // true
// console.log(2 > 1 > 1); // false (2>1 is true and true>1 is false)
// console.log(true > 0); // true