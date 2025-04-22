import { useState } from "react";

const Hooks=()=>{
    const [count,setCount]=useState(0);
    return(
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="h-80 w-80 p-20 border gap-10 rounded-s-md border-black flex flex-col justify-center items-center bg-[#E1EEBC]">
            <p className="h-30 w-60 border border-black bg-[#A0C878]">You clicked button {count} times</p>
            <button onClick={()=>{setCount(count+1)}} className="h-10 w-60 bg-[#A0C878] rounded-lg border border-black">click me</button>
        </div>
        </div>
    )
}
export default Hooks;