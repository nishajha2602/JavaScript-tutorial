// let a =300;
// var c = 100;
// console.log(`outer let: ${a}`);

// if(true){
//     let a = 10; //block and global scope
//     const b = 20; //block scope
//     var c = 30; //global scope
//     console.log(`inner let : ${a}`);
// }

// console.log(`inner var: ${c}`);
// console.log(`outer let: ${a}`);

// function one() {
//     const username = "Nisha";

//     function two(){
//         const email = "nishajha@gmail.com";
//         console.log(username); // inner function can access outer function variable
//     }
//     console.log(email); //out of scope
//     two();
// }
// one();

// if (true){
//     const username = "Nisha";
//     if(username === "Nisha"){
//         const email = "nishajha@gmail.com";
//         console.log(username + email);
//     }
//     conosle.log(email);
// }
// console.log(username);

function addOne(num){  // function declaration
    return num +1;
}

addOne(5);  //function can be called before declaration

const addTwo = function(num){  //expression function
    return num +2;
}

addTwo(5);  // function can be called after declaration

