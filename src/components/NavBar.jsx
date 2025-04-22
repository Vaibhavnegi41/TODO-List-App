import { useEffect, useState } from "react";

const NavBar =({theme,toggleTheme})=>{

    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    
    useEffect(()=>{
        setInterval(()=>{
            const dateValue=new Date();
            setDate(dateValue.toLocaleDateString());
            setTime(dateValue.toLocaleTimeString())
        },1000)
    },[])

    return(
        <div className={`h-16 p-10 ${theme=="dark" ? "bg-[#27391C]" : "bg-[#99BC85]"} flex justify-between gap-8 items-center`}>
            <div className="h-12 w-12 flex gap-4 justify-start rounded-full bg-[#67AE6E]">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYx9JcCXKpk_cehUreEfu3gsjAFrNR8y96w&s"
          alt="image 1"
          className="h-full w-full object-cover rounded-full"
        />
        <p className="font-semibold text-white">ToDo App</p>
            </div>
            
            <div className="font-semibold text-white flex gap-8">
            <button className={`h-[5vh] w-[50%] pl-5 pr-5 ${theme=="dark"?"bg-[#99BC85] text-black":"bg-[#27391C] text-white"} rounded-xl `} onClick={toggleTheme}>Theme</button>
            <p className="text-xs">{date}</p>
            <p className="text-xs">{time}</p>
            </div>
        </div>
    )
}
export default NavBar;