function Footer({theme}){
    return(
        <div className={`h-24 p-10 ${theme=="dark" ? "bg-[#27391C]" :"bg-[#99BC85]"} flex justify-center  gap-8 items-center`}>
            <p className="font-semibold text-white">@2025  ToDo List App</p>
        </div>
    )
}

export default Footer;