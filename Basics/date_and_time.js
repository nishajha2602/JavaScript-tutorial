// let myDate = new Date(); //object instance
// console.log(myDate.toString()); //complete date and time
// console.log(myDate.toDateString()); //complete date
// console.log(myDate.toISOString()); //
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString()); //day is not included,
// //in different format
// let myCreatedDate = new Date(2026,0,2);
// console.log(myCreatedDate.toDateString());

// let newDate = new Date("01-01-2026");
// console.log(newDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

 let date = new Date();
console.log(`${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()}`);

date.toLocaleString('default',{
    weekday: "long"
});