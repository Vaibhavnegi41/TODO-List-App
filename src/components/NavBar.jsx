import { useEffect, useState } from "react";

const NavBar = ({ theme, toggleTheme }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const dateValue = new Date();
      setDate(dateValue.toLocaleDateString());
      setTime(dateValue.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`h-auto sm:h-[10vh] px-4 py-2 ${
        theme === "dark" ? "bg-[#27391C]" : "bg-[#99BC85]"
      } flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-[5vh]`}
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-full bg-[#67AE6E] overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYx9JcCXKpk_cehUreEfu3gsjAFrNR8y96w&s"
            alt="logo"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="font-semibold text-white text-sm sm:text-base">ToDo App</p>
      </div>

      {/* Right Section: Button + Date/Time */}
      <div className="font-semibold text-white flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
        <button
          className={`h-[35px] px-4 ${
            theme === "dark"
              ? "bg-[#99BC85] text-black"
              : "bg-[#27391C] text-white"
          } rounded-xl text-sm`}
          onClick={toggleTheme}
        >
          Theme
        </button>
        <p className="text-xs">{date}</p>
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
};

export default NavBar;
