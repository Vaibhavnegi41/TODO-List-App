const TodoCard = ({ todo, setTodos, view, theme }) => {
    function toggleCompleted() {
      setTodos((prev) => {
        const newTodos = prev.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              isCompleted: !item.isCompleted,
            };
          }
          return item;
        });
  
        localStorage.setItem("todosList", JSON.stringify(newTodos));
        return newTodos;
      });
    }
  
    const { title, description, isCompleted } = todo;
  
    const cardBaseStyles = `rounded-[20px] p-6 flex flex-col gap-5 sm:gap-10 ${
      theme === "dark" ? "bg-[#27391C] text-white" : "bg-[#EDE8DC] text-black"
    }`;
  
    const descBoxStyles = `rounded-[18px] pt-5 px-4 ${
      theme === "dark" ? "bg-[#255F38] text-white" : "bg-[#FFF1D5] text-black"
    }`;
  
    if (view === "list") {
      return (
        <div
          className={`h-[30vh] w-[90vw] sm:w-[60vw] ${cardBaseStyles}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{title}</h3>
            <button onClick={toggleCompleted}>
              {isCompleted ? (
                "❤️"
              ) : (
                <div
                  className={`w-4 h-4 border ${
                    theme === "dark" ? "border-white" : "border-black"
                  } rounded-sm`}
                ></div>
              )}
            </button>
          </div>
  
          <div className={`h-[70%] w-full ${descBoxStyles}`}>
            <p className="text-lg font-serif">{description}</p>
          </div>
        </div>
      );
    }
  
    return (
      <div
        className={`h-auto sm:h-[30vh] w-[90vw] sm:w-[30vw] ${cardBaseStyles}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={toggleCompleted}>
            {isCompleted ? (
              "❤️"
            ) : (
              <div
                className={`w-4 h-4 border ${
                  theme === "dark" ? "border-white" : "border-black"
                } rounded-sm`}
              ></div>
            )}
          </button>
        </div>
  
        <div className={`h-auto sm:h-[70%] w-full ${descBoxStyles}`}>
          <p className="text-lg font-serif">{description}</p>
        </div>
      </div>
    );
  };
  
  export default TodoCard;
  