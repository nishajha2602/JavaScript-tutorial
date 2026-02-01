//singleton -- Object.create
//const user = new Object()

//object literals

const mySym = Symbol(123);

const user = {
    name: "Nisha",
    "full name": "Nisha Jha",
    age: 18,
    [mySym]: 123,  //[] to access symbols
    location: "Delhi",
    email: "nishajha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySym]);

//freeze object
//Object.freeze(user);
user.email = "nishajha@chatgpt.com";
console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}

user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());