import AppFooter from "./AppFooter"; //Nodejs way of importing modules....
import AppHeader from "./AppHeader";

//App is a component that renders an HTML Output that follows XML syntax
function App() {
  return (
    <div>
      {/* <h1>Hello from React Training!!!!</h1>
      <hr/> */}

      <AppHeader/>
      <h3>Rest of UR body content will come here</h3>
      <AppFooter company="CDAC-Electronic City" year="2021"/>
    </div>
  );
}

export default App;
