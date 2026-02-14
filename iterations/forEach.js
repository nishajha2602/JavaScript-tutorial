names= ['Nisha', 'Neha', 'Khushboo', 'Raunak'];

names.forEach(function (item) {
    //console.log(item);
});

names.forEach( (val) =>{
   // console.log(val);
});

function printName(name){
    console.log(name);
}

//names.forEach(printName);

const myCoding =[
    {
        languageName: 'JavaScript',
        framework: 'React'
    },
    {
        languageName: 'Python',
        framework: 'Djangoo'
    },
    {
        languageName: 'Java',
        framework: 'SprintBoot'
    }
];

myCoding.forEach((item, index, arr) =>{
    console.log(item.languageName);
})
