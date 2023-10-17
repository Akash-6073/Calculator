import React ,{useState} from "react";
import "../Style/style.css";
import "../Style/utils.css";
export default function Calc() {
  const [result,setresult] = useState('');
  const add = (event)=>{
    setresult(result.concat(event.target.value))
  }
  const ac =()=>{
    setresult('')
  }
  const del =()=>{
    setresult(result.toString().slice(0,-1))
  }
  const evaluator = ()=>{
    setresult(eval(result))
  }
  return (
    <>
  
    <div className=" mw1 main">
    
    <h1 className="task" style={{color:"white"}}>Task - II</h1>
    <div className="Calculator">
      <form action="">
        <div className="screen">
        <input type="text" name="display"  id="" placeholder="0" value={result} style={{boxShadow : "none",cursor:"auto",color:"black",fontSize:"25px"}} />
        </div>
      <div className="btn1">  
        <input type="button" value="AC" onClick={ac} className="op"  style={{backgroundColor : "grey"}}/>
        <input type="button" value="DEL" onClick={del}  className="op" style={{backgroundColor : "grey"}} />
        <input type="button" value="."onClick={add}  className="op"  style={{backgroundColor : "grey"}}/>
        <input type="button" value="÷"onClick={add}  className="op" style={{backgroundColor : "grey"}} />
      </div>
      <div className="btn1">
        <input type="button" value="7"onClick={add}   className="seven"/>
        <input type="button" value="8"onClick={add}   />
        <input type="button" value="9"onClick={add} />
        <input type="button" value="*"onClick={add}  className="op"  style={{backgroundColor : "grey"}}/>
      </div>
      <div className="btn1">
        <input type="button" value="4"onClick={add} />
        <input type="button" value="5"onClick={add} />
        <input type="button" value="6"onClick={add} />
        <input type="button" value="-"onClick={add}  className="op" style={{backgroundColor : "grey"}} />
      </div>
      <div className="btn1">
        <input type="button" value="1"onClick={add} />
        <input type="button" value="2"onClick={add} />
        <input type="button" value="3"onClick={add} />
        <input type="button" value="+"onClick={add}  className="op"  style={{backgroundColor : "grey"}}/>
      </div>
      <div className="btn1">
        
        <input type="button" value="0"onClick={add} />
        <input type="button" value="="onClick={evaluator}   className="op" style={{backgroundColor : "grey"}} />
      </div>
      </form>
    </div>
    <div className="footer">
      Copyright &copy; All Rights Reserved - Akash 21BCE5812
    </div>
  </div>
  </>
  );
}
