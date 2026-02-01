// function sum (number1, number2){// parameters
//     console.log(number1 + number2);
// }

// function sum (number1, number2){      // parameters
//     let result = number1 + number2;
//     return result
// }

// sum(3,4)//execution with arguments

// console.log(result);

//spread and rest both are same depends on the type of usecase
function calculateCartPrice(val1, ...num){  //rest operator
       return num
} 

console.log(calculateCartPrice(200,400,500));

//handle functions with objects

const user = {
    username: "Nisha",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

//functions with array

const myArray = [100,200,300,400];

function handleArray(getArray){
    return getArray[1]
}

console.log(handleArray(myArray));