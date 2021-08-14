//arguments is a keyword in jS that refers to the args passed to a function call.

class Student{
    courseNames = [];//NOT RECOMMENDED...
    initialize(){
        this.courseNames = ["Physics", "Chemistry", "Biology"]        
    }
    constructor(){
        console.log(arguments)
        this.name = arguments[0];
        this.address = arguments[1];
        this.initialize();
    }
    printDetails(){
        console.log(`The name is ${this.name} from ${this.address}`)
        this.courseNames.forEach((v)=>console.log("The Course: ", v))
    }
}
//JS does not have a concept of private members.
const s1 = new Student("Phaniraj", "Bangalore");
const s2 = new Student();
const s3 = new Student("Phaniraj");

// s1.printDetails()
// s2.printDetails()
// s3.printDetails()

for(prop in s1){
    console.log(`Property Name: ${prop}\tProperty Value: ${s1[prop]}`);
}
