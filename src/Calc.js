import React, { Component, Fragment } from 'react';

//Stateless Components are usually functions. props is a built in keyword for react components that refer the properties or attributes passed to the component from its parent component
let Btn = function(props){
    return(
        <button onClick={props.handler}>{props.caption}</button>
    )
}

class Calc extends Component{
    //refs are data that refers to the inputs of a form or an html page. now refs are obselete. Instead we create members of the component with assignment as React.createRef() which will allow React to create references of the inputs to these variables. 
    state ={ result : 0}
    constructor(){
        super();
        this.firstValue = React.createRef();
        this.secondValue = React.createRef();
        this.operand = React.createRef();
        this.onClick = this.onClick.bind(this);//This is important as this operator inside the event of the element will be undefined. So U bind the current instance to the button so that in the event handler, U can refer the member variables using this operator. 
    }

    onClick(event){
        //debugger;
        const n1 = parseInt(this.firstValue.current.value);
        const n2 = parseInt(this.secondValue.current.value);
        const operand = this.operand.current.value;
        let res = 0.0;
        switch(operand){
            case "+":
                res = n1 +n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
                res = n1 *n2;
                break;
            case "/":
                res = n1 /n2;
                break;
            default:
                res = n1 + n2;
                break;
        }
        this.setState({result : res});
        event.preventDefault();
    }
    render(){
       return (
         <Fragment>
            {/* <tr>
                <td>123</td>
                <td>Phaniraj</td>
                <td>Bangalore</td>
                <td>phanirajbn@gmail.com</td>
            </tr> */}

            <p>Enter the First Value : <input ref={this.firstValue} placeholder="First Value"/></p>
            <p>Enter the Second Value : <input ref={this.secondValue} placeholder="Second Value"/></p>
            <p>
                Select the operand: <select ref={this.operand}>
                    <option>+</option>
                    <option>-</option>
                    <option>X</option>
                    <option>/</option>
                </select>
            </p>
            <p>
                <Btn caption="Get Value" handler = {this.onClick}/>
                <span>Result: {this.state.result}</span>
            </p>
         </Fragment>
     );
 }   
}
export default Calc;