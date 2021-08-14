import Calc from './Calc';
//Components in React are individual units that can make up ur application. In react, UR App is made of 100s of components to support component architecture. Components can be classes that extend Component class of React or simple functions that return an HTML content in the form of XML syntax. 
//Component that has multiple functions and state (data) in it. Basically U need a class that extends Component class of React and have functions in them. They are called as Statefull Components)

function Btn(props){
  return(
    <button>{props.content}</button>
  )  
}

function testMe(){
  alert("Testing 123");
}

//Function that will be mapped to the event handler of the button
function App() {
  return (
    <div>
      <h1>Hello world!!!</h1>
        <Calc/>
      <Btn content="Anything"/>
    </div>
  );
}

export default App;
