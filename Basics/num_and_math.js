const score = 40;
console.log(score);

const num = new Number(100);
console.log(num);
console.log(num.toString());

const otherNum = 50.1234;
console.log(otherNum.toPrecision(4));

const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN'));

//************************Maths***************************//

console.log(Math.abs(-8));
console.log(Math.round(4.6)); //ceil and floor
console.log((Math.random()*10)+1); //give random values between 0 & 1

const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min));
