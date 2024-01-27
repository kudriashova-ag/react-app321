import React, { useState } from "react";
import './Counter.css'


const Counter = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    };
    
    const toggleActive = () => { 
        setActive(!active)
    }

  return (
    <div>
      <h2>Counter</h2>

      <button onClick={toggleActive} className={active?"primary":"secondary"}>heart</button>

      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
