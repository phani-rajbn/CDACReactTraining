let person = function(id, name, address){
    this.address = address;
    this.name = name;
    this.id = id;
}

let p1 = new person(123, "Phaniraj", "Bangalore");
console.log(typeof(p1));
console.log(typeof(person));