//let and const example....
function test(){
    for(let i =0; i <=5; i++){
        console.log('inside the for loop, i is ', i)
    }
    console.log("outside the for loop, i is ", i)//Isnt this strange if used with var. use let so that the scope is well defined within the JS block
}

const trainer ="Phaniraj";
let val = 123;
test();
//use const to store values that dont change in the couse of the application. Use this for optimization of the code where the data need not be evaluated while its reading.
console.log('the name is ', trainer);
console.log(val)
//name = name.toUpperCase();//String based function that returns a new string with uppercase
console.log(trainer);
