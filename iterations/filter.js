nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = nums.filter( (num) => num% 2 === 0)
//console.log(evenNum);

const oddNums = nums.filter(num =>{
    return num %2 !==0
})
//console.log(oddNums);

const emptyArr =[];

nums.forEach((num) => {
    if(num>4){
        emptyArr.push(num);
    }
});

console.log(emptyArr);