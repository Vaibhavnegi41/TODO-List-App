import { useState } from "react";

const PostsSection=()=>{
    
    const [value,setValue]=useState(false);

    function toggleClick(){
        if(value==false){
            setValue(true);
        }
        else{
            setValue(false);
        }
    }
    return(
        <div className="h-[70vh] flex justify-center items-center gap-[30px] w-[100vw] bg-black">
            <div className="h-[60vh] w-[30%] bg-white">
                <div className="h-[20%] w-full flex items-center gap-[10px] ">
                    <div className="h-[60%] ml-5 w-[10%] rounded-full bg-black">
                    <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" 
                alt="Description" class="w-full h-full rounded-full" />
                    </div>
                    <p className="text-[20px]">vaibhav.negi.10</p>
                </div>

                <div className="h-[70%] w-full border border-black">
                <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" 
                alt="Description" class="w-full h-full shadow-lg" />
                </div>
                <div className="h-[10%] w-full flex justify-center items-center">
                    <button onClick={toggleClick} className=" h-[70%] w-[10%] border border-black">{value==true?"❤️":"🤍"}</button>
                </div>
            </div>
            </div>
    )
}

export default PostsSection