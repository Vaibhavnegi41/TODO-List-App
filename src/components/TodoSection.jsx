import { useState } from "react"
import TodoCard from "./TodoCard"
const TodoSection=({openTheModal,todos,setTodos,theme})=>{
    //get view from local storage\
    const initialView=localStorage.getItem("view");
    

    const [view,setView] = useState(initialView)
    


    const toggleView=()=>{
        if(view === "grid"){
            setView("list")
            localStorage.setItem("view","list")
        }
        else{
            localStorage.setItem("view","grid")
            setView("grid")
        }
    }
    return(
        <div className={`min-h-[50%]  ${theme=="dark"?"bg-[#3F4F44]":"bg-[#C1CFA1]"} p-8 flex flex-col items-center gap-4`}>

            <h2 className={`text-center  ${theme=="dark"?"text-white":"text-black"} text-2xl font-semibold`}>TODO</h2>


            <div className="flex gap-10">
            <button  onClick={openTheModal} className={` h-10 w-30 border border-black/10 ${theme=="dark"?"bg-[#27391C] text-white":"bg-[#99BC85] text-black"}  px-5 rounded-md`}>Create Task</button>
            <button onClick={toggleView} className={`h-10 w-30 rounded-md ${theme=="dark"?"bg-[#27391C] text-white":"bg-[#99BC85] text-black"}  px-5`}>{
                view==="grid" ? "grid" :"list"
                }</button>



            </div>

{/* phosphor */}

            <div className={`flex gap-20 m-20 flex-wrap justify-center ${view==="grid" ? "flex-row flex-wrap" : "flex-col"}`}>

                {todos.length<=0 && <p className="text-2xl ">The Task list is empty !</p>}
                
                {todos.map(todo=>{
                    if(!todo.isCompleted)
                    return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} view={view} theme={theme}/>
                })}
                {todos.map(todo=>{
                    if(todo.isCompleted)
                    return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} view={view} theme={theme}/>
                })}

            </div>

        </div>
    )
}
export default TodoSection