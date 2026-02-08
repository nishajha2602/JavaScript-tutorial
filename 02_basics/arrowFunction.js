// const user = {
//     username: "Nisha",
//     email: "nishajha@gmail.com",
//     message: function(){
//         console.log(`Hello ${this.username}, your email is ${this.email}`)
//         console.log(this);
        
//     },
//     //this uses the current contenst of the object
// }
// user.message();

// user.username = "Neha"; // current context updated
// user.message();

// console.log(this);

// function one(){
//     console.log(this);
// }
// one(); // this will point to global object

const two = function(){
    name: "Nisha",
    console.log(this.name)   // this will point to global object and name is not defined in global scope so it will return undefined
}

two();

const addTwo = (num1, num2)=>{
    return num1 +num2;  // explicit return
}   //if there is only one parameter we can remove the () and if there is only one line of code we can remove the {} and return keyword

console.log(addTwo(5,10));

const addThree = num => num+2; // implicit return

console.log(addThree(5));