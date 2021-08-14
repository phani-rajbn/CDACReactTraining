import './AppFooter.css';
//Stateless(Functions where there is no data to store and show) and Statefull(Classes will have data that is manipulated inside the logic and rendered)
const AppFooter = function(props){
    debugger;
    return (
        <div className="app-footer">
            <hr/>
            <p>&copy; All Rights Reserved under -{props.company}-{props.year}</p>
        </div>
    );
}
export default AppFooter