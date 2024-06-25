import { useState } from "react"
import { TodoProvider } from "./contexts/todoContext"


function App() {

  const [todo_list,setTodo_list]=useState([])
  const addtodo=(todo)=>{
    setTodo_list(
      (prevTodo)=>[{id:Date.now(),...todo},...prevTodo]
    )

  }

  const updatetodo=(id,todo)=>{
    setTodo_list((prevTodo)=>{
      prevTodo.map((item)=>{
        item.id===id ? todo :item
      })
    })
  }
  const deletetodo=(id)=>{
    setTodo_list((prevTodo)=>{
      prevTodo.filter((item)=>item.id!==id)
    })
  }


  return (
    <TodoProvider value={{todo_list,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
