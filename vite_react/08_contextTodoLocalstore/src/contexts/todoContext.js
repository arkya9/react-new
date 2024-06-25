import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todo_list:[{
        id:1,
        todo_name:"react",
        completed:true

    }],
    addtodo:(todo)=>{},
    updatetodo:(id,todo_name)=>{},
    deletetodo:(id)=>{},
    togglecomplete:()=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider