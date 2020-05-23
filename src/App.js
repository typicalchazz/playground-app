import React from 'react';
//import logo from './logo.svg';
import './App.css';

const InputForm = () => {
  const [value, setValue] = React.useState("");

  const printValues = event => {
    event.preventDefault();
    console.log(value * 2);
  };

  return (
    <form onSubmit={printValues}>
      <h1>Playground App</h1>
      <label>
        Enter Value:
        <input
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
      </label>
      <br />
      <button>Submit</button>
      <br />
      <p>Value in Box: {value}</p>
    </form>
  );
};

export default InputForm;
