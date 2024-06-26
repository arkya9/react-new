import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todo_list: [
    {
      id: 1,
      title: "first task",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export function useTodo() {
  return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
