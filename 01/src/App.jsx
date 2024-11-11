import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const increment = () => {
    const newCounterValue = counter + 1
    setCounter(newCounterValue)
    

    // Only hide alert if the counter becomes non-negative
    if (newCounterValue >= 0) {
      setShowAlert(false)
    }

    //if i want to add more than one to a number but do it iterationaly then we can use callback function
    //setCounter((prevcounter)=>prevcounter+1)
    //setCounter((prevcounter)=>prevcounter+1)
    //setCounter((prevcounter)=>prevcounter+1)
    //this can be dont till how many times i want to do it if i just call simple setcounter function then it cause batching its where the react is taking the function and seeing the parameter and saying that ur calling the same function with same parameter but if give diff paramter along with multiple same parameter function then it treats the multiple same parameterd function as one and the one with diff paramter as other and run it

  };

  const decrement = () => {
    const newCounterValue = counter - 1;
    setCounter(newCounterValue);

    // Show alert if the counter becomes negative
    if (newCounterValue < 0) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increment}>Add(+)</button><br />
      <button onClick={decrement}>Remove(-)</button>
      {showAlert && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Counter value is negative
        </p>
      )}
    </>
  );
}

export default App;
