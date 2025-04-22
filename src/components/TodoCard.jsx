const TodoCard = ({todo,setTodos,view,theme})=>{
    
    function toggleCompleted(){
        setTodos((prev)=>{
            const newTodos=prev.map((item)=>{
                if(item.id === todo.id){
                    return {
                        ...item,
                        isCompleted: !item.isCompleted,
                    };
                }
                
                
                return item;
            })
            localStorage.setItem("todosList", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    const {title, description,isCompleted}=todo;

    if(view=="list"){
        return(
            <div className={`h-[30vh] w-[60vw] text-white rounded-[20px] p-6 flex flex-col gap-5 ${theme=="dark" ? "bg-[#27391C] text-white" : "bg-[#EDE8DC] text-black"}`}>
                <div className=" flex justify-between">

                        <h3 className={`font-semibold ${theme=="dark" ? "text-white" :"text-black"}`}>{title}</h3>

                        <button onClick={toggleCompleted}>
                        {isCompleted?"❤️":<div className={`w-4 h-4 border ${theme=="dark"?"border-white":"border-black"} rounded-sm`}></div>}
                        </button>
                        </div>
                
                
                <div className={`h-[80%] w-[100%] text-left pt-5 ${theme=="dark" ? "bg-[#255F38]" :"bg-[#FFF1D5]"} rounded-[18px] `}>
                <p className={` ml-4 ${theme=="dark"?"text-white":"text-black"} p-4 mr-5 mt-10 text-1xl font-serif text-lg`}>{description}</p>
                </div>
            </div>

        )
    }
    
    return(
        <div className={`h-[30vh] w-[30vw] text-white  rounded-[20px] p-6 flex flex-col gap-10 ${theme=="dark" ? "bg-[#27391C] text-white" : "bg-[#EDE8DC] text-black"}`}>

            <div className=" flex justify-between">

            <h3 className={`font-semibold ${theme=="dark" ? "text-white" :"text-black"}`}>{title}</h3>
            
            <button onClick={toggleCompleted}>
            {isCompleted?"❤️":<div className={`w-4 h-4 border ${theme=="dark"?"border-white":"border-black"} rounded-sm`}></div>}
            </button>
            </div>

            <div className={`h-[80%] w-[100%] ${theme=="dark"?"bg-[#255F38]":"bg-[#FFF1D5]"}  rounded-[18px] `}>
            <p className={` ml-4 ${theme=="dark"?" text-white":" text-black"} p-4 mr-5 mt-10 text-1xl font-serif text-lg`}>{description}</p>
            </div>

        </div>
    )
}

export default TodoCard;    