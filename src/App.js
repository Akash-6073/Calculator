import './App.css';
import Calc from './Components/Calc';
function App() {
  return (
    <>
       <nav className="nav"> 
        <ul>
          <li style={{textDecoration:"underline" , textUnderlineOffset : "5px"}}>Calculator</li>
          <li className="homw">Home</li>
        </ul>
      </nav>
    <Calc/>
      
    </>
  );
}

export default App;
