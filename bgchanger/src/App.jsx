import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("orange");

  return (
    <div
      className= "w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center flex-wrap  bottom-1 inset-x-0 px-2">
        <button
          onClick={() => setColor("red")}
          className="flex-wrap  justify-center gap-1 shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          Red
        </button>

        <button
         onClick={() => setColor("green")}
          className=" border-l-purple-600 flex-wrap  justify-center gap-1 shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          Green
        </button>

        <button
         onClick={() => setColor("blue")}
          className="flex-wrap  justify-center gap-1 shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          blue
        </button>

        <button
         onClick={() => setColor("purple")}
          className="flex-wrap  justify-center gap-2 shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          purple
        </button>

        <button
         onClick={() => setColor("orange")}
          className="flex-wrap  justify-center gap-2shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          Orange
        </button>

        <button
        onClick={()=> setColor("pink")}
          className="flex-wrap  justify-center gap-3 shadow-lg bg-white
          py-2 rounded-3xl p-8 m-4  text-black"
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
