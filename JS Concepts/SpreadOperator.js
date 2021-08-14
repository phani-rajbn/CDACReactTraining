let nums = [10,20,55,45];

//U can use spread operator to fill the data of one array into another...
console.log(nums)
let anotherNums = [100,200, ...nums];
// console.log(anotherNums)
//How copying works:
//let copy = nums; //shallow copying where both the objects share the same reference.
let copy = [...nums]; //creating a new array and fill the data in it..
copy.push(444);//copy is a alias to the nums
console.log(nums)
console.log(copy)

//This kind of spreading is applicable to objects
let p1  = {city :"Bangalore", empName : "phaniraj"};
let p2 = { email :'phanirajbn@gmail.com', ...p1};
console.log(p2);
console.log(p1 == p2) //this is not inheritance, but composition where an object will have the data of other object along with its own stuff...