// singleton
// Object.create  // constructor method to create singleton object




// object literals

const mySym = Symbol("key1")  // symbol is also a datatype

   // in object keys in normal are strings (no need to mention it by syntax) if we dont mention particularly and values can be any datatype even object itself
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);  
  // one way to access value in object
   
// console.log(JsUser["email"]);
  // another way(but here we have specify the proper syntax of key which is string)

// console.log(JsUser["full name"]);  
 // this key can't be access from (.) notation

// console.log(JsUser[mySym]);
  // way to access key(which datatype is symbol) and to give symbol as key first we need to hold it in an variable and then use the syntax of []


//   JsUser.anotherName = "Ankit"   // can add other value like this also in object
   //   console.log(JsUser);




// JsUser.email = "hitesh@chatgpt.com"  // to change or override value in object
   //   console.log(JsUser.email);

// Object.freeze(JsUser)  // to freeze object means no change will propagate
  // JsUser.email = "hitesh@microsoft.com"
     // console.log(JsUser);




                    // interesting and important

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// (this) can be used to take the direct reference of the object without mentioning the name which is JsUser here and can access values

// console.log(JsUser.greeting);
  // function will not be executed inplace reference of it wil be given because of scope in function  

// console.log(JsUser.greeting());

// console.log(JsUser.greetingTwo());