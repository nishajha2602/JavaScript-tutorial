const myObj ={
    name: 'Nisha',
    age: 18,
    city: 'Delhi'
}

for (const key in myObj) {
   // console.log(`${key}: ${myObj[key]}`);
}

const arr = ['a', 'b', 'c' , 'd']

for (const key in arr) {
    console.log(key, ': ',arr[key]);   
}