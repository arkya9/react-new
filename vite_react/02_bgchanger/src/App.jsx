import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("pink")}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          pink
        </button>
      </div>
    </>
  );
}

export default App;
