import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [lendth, setLendth] = useState(8);
  const [isNumber, setNumber] = useState(false);
  const [isChar, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx";
    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()-_+=?/";

    for (let i = 1; i <= lendth; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [lendth, isNumber, isChar, password]);
  //use useEffect to run passwordGenerate on load
  useEffect(() => {
    passwordGenerate();
  }, [lendth, isNumber, isChar, setPassword]);
  //use ref hook copy
  const passref = useRef(null);

  const copyPassword = useCallback(() => {
    //to select password on copy
    passref.current?.select();
    window.navigator.clipboard.writeText(password).then(() => {
      setCopySuccess(true);
    });
  }, [password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-800">
        <h1 className="text-white text-center text-2xl my-3">
          PASSWORD GENERATOR
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-gray-900 bg-white"
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button
            onClick={() => {
              copyPassword();
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2"
          >
            {copySuccess ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="length" className="text-white mr-2">
            Length: {lendth}
          </label>
          <input
            type="range"
            id="length"
            min={8}
            max={100}
            value={lendth}
            onChange={(e) => setLendth(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={isNumber}
            onChange={() => setNumber((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="includeNumbers" className="text-white">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={isChar}
            onChange={() => setChar((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="includeSpecialChars" className="text-white">
            Include Special Characters
          </label>
        </div>
        {/* <div className="flex justify-between items-center text-white">
          <button
            onClick={() => {
              passwordGenerate();
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Generate
          </button>
          <span id="lengthValue" className="ml-2">
            {length}
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default App;
