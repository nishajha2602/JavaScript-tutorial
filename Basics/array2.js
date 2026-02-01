const marvel_heros = ['Thor','IronMan','SpiderMan'];
const dc_heros = ['SuperMan','Flash','BatMan'];

//difference between push and concat

//marvel_heros.push(dc_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//spread
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

//de-nest arrays using flat()
const new_arr = [1,2,3,[2,3,4],5,6,[7[8,9]]];
const real_arr = new_arr.flat(Infinity);
console.log(real_arr);

console.log(Array.isArray("nisha"));// check whether the given value is array or not

console.log(Array.from("nisha")); //convert into array

console.log(Array.from({name: "nisha"}));//need to specify key or value that should be convert into array otherwise will give empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));