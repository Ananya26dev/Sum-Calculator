import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [add, setAdd] = useState(0);
  const handleCalc = (event) => {
    event.preventDefault();
    if (num1 == 0 || num2 == 0) {
      alert("Please Enter Number 1 & Number 2");
    } else {
      let add = parseInt(num1) + parseInt(num2);
      setAdd(parseInt(add));
    }
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Sum Calculator</h2>
        <form onSubmit={handleCalc}>
          <div>
            <label htmlFor="Number1">Number 1: </label>
            <input
              type="text"
              placeholder="Enter Number 1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Number2">Number 2: </label>
            <input
              type="text"
              placeholder="Enter Number 2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
          <div className="center">
            <h3>Your Sum is: {add}</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
