//New syntax of ES6..

class Person{
    constructor(){
        this.name =undefined;
        this.city = undefined;
    }
}

//Extendability feature is provided in ES6...

class Employee extends Person{
    constructor(){
        super();//is a must and should be the first line of the derived class constructor..
        this.salary = 45000;
        this.department = undefined
    }
}
// let p1  = new Person("Phaniraj");
// console.log(p1);
// console.log(typeof(p1));//typeof operator is used to get the data type associated with the variable. 
// let p2 = new Person("Nathan", "Dallas");
// console.log(p2)

let e1 = new Employee();
e1.name = "Phaniraj"; //from the base class
e1.city ="Bangalore";
e1.department ="Sales";//from the current class. 
let p1 = {
    name: "Ram",
    city : "New Delhi",
    department : "CustomerSupport"
}
let e2 = p1;
console.log(e2.name);