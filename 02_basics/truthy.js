const user = "Nisha";

if(user){
    console.log(`Hello ${user}`);
}
else{
    console.log(`hello guest`);
}

//falsey values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values: "0", 'false', [], {}, function(){},


//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); //output: 5

let val2;
val2 = null ?? 10;
console.log(val2); //output 10

let val3;
val3 = undefined ?? 5;
console.log(val3);  //output 5


// ternary operator:  condition ? true : false

let price = 100;

price > 50 ? console.log("greater than 50") : console.log("less than 50");