import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import TodoSection from "./components/TodoSection"
import Footer from "./components/Footer"
import AddTaskModal from "./components/AddTaskModal"



import { useState } from "react"


function App(){
  const ToDo = JSON.parse(localStorage.getItem("todosList")) || [];

  const [todos,setTodos]=useState(ToDo);
  const [isOpen,setIsOpen]=useState(false);

  function openModel(){
    setIsOpen(true);
  }
  function closeModel(){
    setIsOpen(false);
  }
  
  const initialValue=localStorage.getItem("theme")
  const [theme,setTheme]=useState(initialValue)

  const toggleTheme=()=>{
    
    if(theme=="dark"){
      setTheme("light")
      localStorage.setTheme("theme","light")
    }
    else{
      setTheme("dark")
      localStorage.setTheme("theme","dark")
    }

    console.log("hello");
  }
    return(
      <div>
        {isOpen && <AddTaskModal theme={theme} closeModel={closeModel} setTodos={setTodos}/>}
      
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <TodoSection openTheModal={openModel} theme={theme} todos={todos} setTodos={setTodos}/>
      <Footer theme={theme}/>
      </div>
    )
  
}
export default App
