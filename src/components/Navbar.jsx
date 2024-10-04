import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex p-[10px] justify-start">
      <img src={Logo} alt="logo" className="h-[100px] w-[100px] mr-[70%] bg-black rounded-2xl" />
      <h1 className="text-xl font-semibold mr-[50px] hover:text-indigo-500 cursor-pointer pt-[10px]" onClick={()=> window.scrollTo(0, 0)}>
        About
      </h1>
      <h1 className="text-xl font-semibold mr-[50px] hover:text-indigo-500 cursor-pointer pt-[10px]" onClick={()=> window.scrollTo(0, 300)}>
        Services
      </h1>
      <h1 className="text-xl font-semibold mr-[50px] hover:text-indigo-500 cursor-pointer pt-[10px]" onClick={()=> window.scrollTo(0, 300)}>
        Contact
      </h1>
    </div>
  );
}

export default Navbar;
