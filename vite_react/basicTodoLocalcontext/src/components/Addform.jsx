import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function Addform() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    console.log(`hiii--${todo}`);
    addTodo({ todo });
  };
  return (
    <form onSubmit={add}>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default Addform;
