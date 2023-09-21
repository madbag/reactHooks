// App.jsx
import "./App.css";
import { useState } from "react";
import Counter from "./components/01-use-state/Counter"; //component 1
import Timer from "./components/02-use-state-loop/Timer"; //component 2
import TimerTwo from "./components/03-use-effect-mounting/TimerTwo"; //component 3
import TimerThree from "./components/04-use-effect-unmounting/TimerThree"; //Component 4
import TimerFour from "./components/05-use-effect-conditional-updates/TimerFour" //component 5
import IronbnbList from "./components/IronbnbList";//component 6

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {/* !show will always do the opposite no matter what the state is */}
        {show ? "Hide" : "Show"}
      </button>

      {/* {show && <Counter />} */}
      {/* If the button is show then render Counter */}

      {/* {show && <Timer />} */}
      {/* {show && <TimerTwo />} */}
      {/* {show && <TimerThree />} */}
      {/* {show && <TimerFour />} */}

      {show && <IronbnbList/>}
    </div>
  );
}
export default App;
