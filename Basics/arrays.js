// //array mamke shallow copies
// const arr = [0,1,2,3,4,5,6,7]; //array can contain any value of any datatype
// console.log(arr);

// const arr2 = new Array(1, "nisha", 2, true, 3.14, 'n');
// console.log(arr2[3]);

// // array methods
// arr2.pop();//remove one end value
// arr2.push(6);//add value at the end of the array
// arr2.shift();//remove value from the beging of array
// arr2.unshift(0);//insert value in the begining of array
// console.log(arr2);
// console.log(arr2.includes(9));
// console.log(arr2.indexOf('n'));

// const myArr = arr.join();

// console.log(arr);
// console.log(myArr);
// console.log(typeof(myArr));

//slice & splice

const arr3 = [0,1,2,3,4,5];
console.log("A) ", arr3);

const my1 = arr3.slice(1,3);
console.log("B) " ,arr3);
console.log(my1);

const my2 = arr3.splice(1,3);
console.log("C) ", arr3);
console.log(my2);
