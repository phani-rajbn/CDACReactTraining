function hello(name, ...names){
    console.log('Hello, ',names ,'from ', name)
}
//Rest operator should be the last of the parameter list. There can be only one such rest parameter for a function.
hello('Phaniraj', "Vinod", "Rajesh", "Gopal")