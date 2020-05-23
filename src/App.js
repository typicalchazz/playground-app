import React, {useState} from 'react'
import './App.css';

function App() {
  const [values,setValues] = useState("")
  
  
  
  
  return (
<form>
  <h1>Playground App Form</h1>
  <label>
    Value 1:
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    Value 2:
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    Value 3:
    <input type="text" name="name" />
  </label>
  <br/>
  <br/>
  <input 
    type="submit" 
    value="Submit Values"/>
    
</form>
  );
}

export default App;
