const accountId = 12345;
/* Const value cant be reassigned. */
// accountId = 2

let accountEmail = "ankit@gmail.com";
// accountEmail = "a@gmail.com"

/* Prefer not use var because of issue in block scope ('{}') and functional scope.  */
var accountPassword = "1234";
// accountPassword = 4321

/* Variables can also be declared without keyboards(let,const,var) but it is not a good practice. */
accountCity = "Sikar";
// accountCity = "Jaipur"

/* undefined. */
let accountState;

/* way to log value into console individually. */
console.log(accountCity);

/* way to log values into console in group. */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* You can use semi-colons(;) or not , it doesnt make any difference. But while in future writing node or react its best to not use. */