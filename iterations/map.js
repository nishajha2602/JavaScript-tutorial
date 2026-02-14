const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('FR', 'France');

//iterate over map using for of loop
// for(const key of map){     //map.keys() or map.values()- key or value milega
//     // key of map se key and value dono milenge
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key,': ', value);
}

const myObj ={
    name: 'Nisha',
    age: 18,
    city: 'Delhi'
}

for (const [key, value] of myObj) {
    console.log(key,': ', value);    //error- object is not iterable
}