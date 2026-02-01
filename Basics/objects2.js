//non-singleton
//const user = {}

const gitUser = {};

gitUser.id = "1234abc";
gitUser.name = "Nisha";
gitUser.isLoggedIN = true;

// console.log(gitUser);

// const regularUser = {
//     email: "nishajha@gmail.com",
//     "full name":{
//         first_name: "Nisha",
//         last_name: "Jha"
//     }
// }

// console.log(regularUser["full name"].first_name);

//combining objects

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

const obj3 = {obj1, obj2}; //not a good practice
const obj4 = Object.assign({}, obj1, obj2);
//console.log(obj3);
console.log(obj4);

console.log(obj4 === obj1);

//object into array

const user2 = [
    {
        id: 1,
        email: "nisha@gmail.com"
    },
    {
       
    },
    {

    }
]

user2[1].email

//spread objects
const obj5 = {...obj1, ...obj2}
console.log(obj5);

console.log(gitUser);
console.log(Object.keys(gitUser));
console.log(Object.values(gitUser));
console.log(Object.entries(gitUser));

console.log(Object.hasOwnProperty('isLoggedIn'));


const course ={
    courseName: "JavaScript",
    price: 999,
    courseInstructor:"Hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course; //object destructuring
//console.log(courseInstructor);

console.log(instructor);

