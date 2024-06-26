import { useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";

const [todo_list, setTodolist] = useState([]);
const addTodo = (todo) => {
  setTodolist((prevtodo) => {
    [{ id: Date.now(), ...todo }, ...prevtodo];
  });
};
const updateTodo = (id, todo) => {
  setTodolist((prevtodo) => {
    prevtodo.map((item) => {
      item.id === id ? (item.title = todo) : item;
    });
  });
};

const deleteTodo = (id) => {
  (prevtodo) => {
    prevtodo.filter((item) => {
      item.id !== id;
    });
  };
};

const toggleComplete = (id) => {
  setTodolist((prevtodo) => {
    prevtodo.map((item) => {
      item.id === id ? (item.completed = !item.completed) : item;
    });
  });
};

function App() {
  return (
    <TodoProvider
      value={{ todo_list, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
