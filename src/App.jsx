import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p> Counter value : {count}</p>
      <button style={{ margin: "10px" }} onClick={increment}>
        +1
      </button>
      <button onClick={decrement}>-1</button>
    </>
  );
}

export default App;
