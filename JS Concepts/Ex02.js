//Since ES 6 version, JS uses 2 keywords to declare variables: let and const. 
//let(new version) vs var(old version)
//var, let and const.
let num1 = 1;//global scope of the variable
function test(){
    let num1 = 1;//var is used to create local variables.
    num1++; //the scope of the num1 will be limited to the area where it is defined. 
}
console.log('num1 is ', num1);
test();
console.log('num1 is ', num1);
//What will be the output in the Console
//To run the JS code directly without the browser support, U can do that using NODEJS