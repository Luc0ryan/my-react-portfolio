import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto flex flex-col py-20 gap-8">

        <div className="text-5xl/relaxed font-sans font-bold">
          Clear design for a complex world <br />
          Solutions that work beyond the screen
          <br />
          Building in ☀️ San Jose
        </div>
        
    <div className="bg-debug text-white p-8">
      Config Test
    </div>

        <div className="text-5xl/relaxed font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500">
          Lucas Ryan
        </div>

        <div className="text-5xl/relaxed font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500 bg-[length:200%_200%] animate-gradient-slow">
          Lucas Ryan
        </div>
      </div>
    </>
  );
}

export default App;
