const name = "Nisha";
const repoCount = 5;

//console.log(name + repoCount + "Value") //outdated

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const newName =new String("Nisha Jha");

console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toLowerCase());

//substring do not use -ve index

console.log(newName.slice(-8,4));

const newString =new String("     Nisha    ");
console.log(newString.trim());

const url = "https://nishajha.com/nisha%11jha";
console.log(url.replace('%11','-'));