myNumbers =[1,2,3,4,5];

// const sum = myNumbers.reduce(function (acc, curr){
//      console.log(`accumulator: ${acc} and current value is ${curr}`);
//      return acc+curr;
// }, 0);

const total = myNumbers.reduce((acc, curr)=> acc+curr,0);console.log(total);