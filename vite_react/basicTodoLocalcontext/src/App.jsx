import { useEffect, useState } from "react";
import Addform from "./components/Addform";
import { TodoProvider } from "./contexts/todoContext";
import GetItem from "./components/GetItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevtodo) => [
      { id: Date.now(), msg: todo.todo, is_check: false },
      ...prevtodo,
    ]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const alltodo = localStorage.getItem("todos");
    setTodos(alltodo);
  }, []);

  return (
    <TodoProvider value={{ addTodo }}>
      <Addform />
      <GetItem todo={todos} />
    </TodoProvider>
  );
}

export default App;
