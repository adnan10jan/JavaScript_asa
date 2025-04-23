const myNums = [1,2,3,4]

const myTotal = myNums.reduce( (acc, currval) => {      //reduce aks for two parameters accumulator and current value, and acc required initial value we can give as second parameter or it can take initial value as 1st array element
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299
    },
    {
        itemName: 'py course',
        price: 599
    },
    {
        itemName: 'datascience course',
        price: 1999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);
