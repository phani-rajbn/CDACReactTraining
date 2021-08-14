let p1 ={
    name : "phaniraj", email :"phanirajbn@gmail.com", city: "Bangalore"
};

function sayHello({name, city}){
    console.log(`Hello ${name}m how's weather in ${city}`);
}

sayHello(p1)