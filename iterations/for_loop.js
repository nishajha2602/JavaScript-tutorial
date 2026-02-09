//for loop
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

//nested loop
for(let i=1; i<=5; i++){
    console.log(`outer loop: ${i}`);
    for(let j=1; j<=10; j++){
        console.log(i + "*" + j + "="  +i*j);
    }
}

//for loop with array

const myArray = [1,2,3,4,5];
for(let i = 0; i< myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}