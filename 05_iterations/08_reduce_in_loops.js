// reduce is also a method for arrays in loop, and this is how it works -

// here acc - accumlator & currval - currentvalue
// the zero(can be any number) outside of the scope is initial value of acc, and after acc will take the value which it will return after every condition
// currval is the value as we iterate(loop) on value of array in orderwise from first to last 
// and by running the loop it will give a last value as output based on our condition



const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);



// another syntax to write the above in arrow fucntion with implicit return

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);






const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);