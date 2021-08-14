addFunc(123,123);

function addFunc(num1, num2){
    console.log(num1 + num2)
}

//THe function created below is called Anonymous method. These methods behave like aliases and refered using variables. In this case, subFunc is a variable pointing to a function that is not yet declared.
let subFunc = function(num1, num2){
    console.log(num1 - num2);
}
console.log(typeof(subFunc));//Function
subFunc(123,23);

testMe();//A BIG NO FOR ANONYMOUS METHODS AS ANONYMOUS METHODS ARE LIKE VARIABLES.

let testMe = function(){
    console.log("Fnc with no args")
}

//Arrow functions in JS introduced in ES6. 
//Lambda Expression.
let mulFunc = (n1, n2) => console.log(n1 * n2)
mulFunc(13,12);
//The purpose of creating anonymous method and Arrow methods is to provide clean stack of methods where U need a method to be used only once within the execution and U dont want to create a seperate function with a name to it. Sometimes U use it to be passed as arguement to the function itself.  
//CallBack functions are functions that are called by the calling method. U call a method which internally calls another method after a certain condition is met...
function callMe(){
    console.log(new Date());
}
//No need to creat a explicit function when UR intention is to use it only within another function...
//Function is passed as an argument to the function U R calling.
setInterval(()=>console.log("Call Me"), 2000);
/*
A function is a logical  block of code that is expected to be frequently used within ur app. So that U can replace that block with a single statement. Functions are also created for better modularity.One function should do only one job(Single responsibility principle). U dont dump multiple functionalities into one. 
Named functions: They have a definite name which is used to call them whenever we want
Anonymous functions: Created on the fly to be used inside a function once or twice but not prefered to be repeatedly used. Callback functions are usually anonymous
Arrow functions: Improvised Anonymous methods with a signature of an expression, hense the name Lambda Expressions. 
*/