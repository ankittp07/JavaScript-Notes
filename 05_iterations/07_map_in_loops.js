// map is function as forEach, the difference is of return value, map can forEach can't 
// forEach, filter, map, and reduce, all these can be used with array only



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
   //console.log(newNums);
  

   // in map method we cant filter values like in filter method, it(nw here) will iterate on every element of the given array
const newWay = myNumers.map( (nw) => {
    return nw > 4
} )
// console.log(newWay);





// it is calle chaining, we can run more than one method(loop) on an array by chain like this
// syntax - array.map().filter().   - (below syntax is more readable)
// how it works - first it will go on the first method and iterate on array and we will get a new array with with values we get from conditon in the mehtod, now move on the second method and it will itereate on new array not on the orginial or old array, and so on, in last we will get a array with an output value of last method


const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);