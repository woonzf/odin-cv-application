import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function countPlus() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center gap-5">
          <img src={viteLogo} alt="Vite" />
          <span>+</span>
          <img src={reactLogo} alt="React" />
        </div>
        <div className="flex justify-center items-center gap-5">
          <span>Count: {count}</span>
          <button className="w-10 border" onClick={countPlus}>
            +
          </button>
        </div>
        <div className="bg-black text-white text-center" id="test">
          TAILWIND CSS TEST OK
        </div>
      </div>
    </>
  );
}

export default App;
