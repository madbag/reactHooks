// src/components/03-use-effect-mounting/TimerTwo.jsx

import React, { useState, useEffect } from "react";
//along with useState now we have UseEffect as well

function TimerTwo() {
  const [count, setCount] = useState(0);

  // Add the effect in the function body
  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");

    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1); //prevCount take the previous value of count and then adds 1 to it as per the function
    }, 1000);
  }, []); // <--  [] means: Run the effect only once if it empty, after initial render

  return (
    <div className="Timer">
      <h2>Timer Two</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;
