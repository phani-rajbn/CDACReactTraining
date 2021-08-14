let s1 ="My name is Phaniraj";
let s2 ='I live in Bangalore';

let s3 ='I am training "CDAC-E Course" for the batch of 2021';
let s4 ="This course is avalable in 'UDEMY' also";
let s5 =`This is a new 
feature in ES6.
We call this as
TEMPLATE STRINGS`;//Template strings allow to have multiple lines in it....

let name ="Phaniraj";
let email ="phanirajbn@gmail.com"
let age = 16;
let s6 = `Email address of ${name} is ${email}`;
let s7 = `${name} is ${age < 18 ? ' a Minor' : 'an Adult'}`;
function test(strings){
    console.log(s7);
}
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4)
// console.log(s5)
// console.log(s6)

test(s6);