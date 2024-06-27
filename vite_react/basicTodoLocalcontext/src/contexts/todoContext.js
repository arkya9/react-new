import { createContext, useContext } from "react";

export const todocontext = createContext({
  toto_list: [
    {
      id: 1,
      msg: "demo msg",
      is_check: false,
    },
  ],
  addTodo: (mytodo) => {},
  deleteTodoById: (id) => {},
  updateTodoById: (todoId) => {},
});
export const TodoProvider = todocontext.Provider;
export const useTodo = () => {
  return useContext(todocontext);
};
