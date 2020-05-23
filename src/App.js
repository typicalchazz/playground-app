import React from 'react'
import './App.css';

function App() {
  //const [values,setValues] = useState("")
  
  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
  }
  
  
  return (
    <form>
      <h1>Playground App Form</h1>
        <label>
          Value 1:
          <input type="text" name="name" />
        </label>
      <br/>
      <br/>
      <input 
        type="submit" 
        value="Submit Values"
        onChange = {handleChange}
      />
    </form>
  );
}

export default App;
