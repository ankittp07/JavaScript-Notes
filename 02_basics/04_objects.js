// const tinderUser = new Object()         // singleton object
const tinderUser = {}       // non-singleton or object literals



tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
  // console.log(tinderUser);



   // nesting of objects in object and access them
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
  // console.log(regularUser.fullname.userfullname.firstname);





// ways to combine two or more objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }    // not a proper way
   // console.log(obj3);


// const obj3 = Object.assign(obj1, obj2, obj4)
 // console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2, obj4)
 // console.log(obj3);
  
   // as you console both methods we will not find any difference but the difference is in first one obj2 and obj4 are source and obj1 is target which means they both are combining into obj1,  but in second one ({}) is target and all three objects are source which specify more to combine all in empty object



   // we will use spread operator mostly to combine two or more objects, like we do in arrays
// const obj3 = {...obj1, ...obj2}
 // console.log(obj3);





 // very important
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email);
  // to access value of objects in array


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
  // to access all keys of an object, output will be an array

// console.log(Object.values(tinderUser));
   // to access all values of an object, output will be an array

// console.log(Object.entries(tinderUser));
   // put every key and its value into arrays and combine all them to an array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
   // to ask if only the keys includes in an object





              // destructure objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor   // access objects


// access same value again and again with whole syntax is annoying for clean code

// const {courseInstructor} = course 
  // direct access value with key name only without object name
// console.log(courseInstructor); 

const {courseInstructor: instructor} = course 
 // can also modify the key name for more comfort
// console.log(instructor);





                     // JSON API intro                              
                                                                    
// the data or values that backend send comes in JSON API({}, a object with no name but sometime we also get them in form of an array), example of it...                  

/* 
{
     "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}    

[
    {},
    {},
    {}
]
     */