// we also have filter operation in loops (like forEach)





// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);
    //undefined, means we can't hold forEach in an variable and call it somewhere else (don't return values)



// in filter we can return values unlike forEach

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

     // can also use implicit return syntax of arrow function

// const otherNums = myNums.filter( (num) => {
//     return num > 4
// } )
  // console.log(otherNums);






// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);








// ***interesting and imp about how we use filters****

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  console.log(userBooks);


  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);



  let userDemand = books.filter ( (bks) => {
      return bks.genre === 'Fiction'
  } )
  console.log(userDemand);