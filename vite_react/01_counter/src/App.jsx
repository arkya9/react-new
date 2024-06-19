import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function mycounter(operation) {
    if (operation === '++') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>header is {counter}</h1>
      <br /><br />
      <button onClick={() => mycounter('++')}>Increment</button>
      <button onClick={() => mycounter('--')}>Decrement</button>
    </>
  );
}

export default App;
