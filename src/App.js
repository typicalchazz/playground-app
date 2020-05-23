import React from 'react';
//import logo from './logo.svg';
import './App.css';

const Form = () => {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  const printValues = event => {
    event.preventDefault();
    console.log(value * value2);
  };

  return (
    <form onSubmit={printValues}>
      <h1>Playground App</h1>
      <label>
        Enter Value 1:
        <input
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
      </label>
      <br />
      <label>
        Enter Value 2:
        <input
          value={value2}
          onChange={({ target: { value } }) => setValue2(value)}
        />
      </label>
      <br/>
      <button type = "submit">Submit</button>
    </form>
  );
};

export default Form;
