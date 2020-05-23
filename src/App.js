import React from 'react';
//import logo from './logo.svg';
import './App.css';

const Form = () => {
  const [value, setValue] = React.useState("");
  //const [value2, setValue2] = React.useState("");

  const printValues = event => {
    event.preventDefault();
    console.log(value * 2);
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
      <button>Submit</button>
    </form>
  );
};

export default Form;
