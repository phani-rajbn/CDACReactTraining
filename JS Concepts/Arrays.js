let students = ['Rama', 'Seetha', 'Laxman'];//This is a new array in JS..
students.push("Phaniraj");//adds the element to the bottom of the list
students.push("Krishna");
students.push("Devaki");
students.push("Vasudev");
students.push("Radha");
students.push("Shyam");
students.unshift("Purushotham")//Add the element to the first of the Array..

//splice is used to add/remove/replace the element at the specific location within the array
console.log(students);
//1st parameter will tell from which index U wish to modify, 2nd parameter will tell the no of elements to delete. The optional 3rd parameter will give the data to add
students.splice(2,1);//It will delete the 3rd element of the array..
console.log(students);
//how to create array, add items, remove items, replace items....
//sort, pop, forEach, map. 

//using foreach statement to read the records of a array...
// students.forEach(function(value){
//     console.log(value)
// });
//students.forEach((v)=> console.log(v));
const find = 'Dev'
const foundNames = students.filter((v)=> v.includes(find));
foundNames.forEach((n)=>console.log(n))