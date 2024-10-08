import React, { useContext } from "react";
import { mainContext } from "./mainContext";

let Counter = () => {
  const { counter, setCounter } = useContext(mainContext);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};
export default Counter;