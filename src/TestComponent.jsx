import React, { useState } from "react";
import { mainContext } from "./mainContext";
import Counter from "./Counter";

let TestComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <mainContext.Provider value={{ counter, setCounter }}>
        <Counter />
      </mainContext.Provider>
    </div>
  );
};

export default TestComponent;
