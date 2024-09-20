import React from "react";
import Home from "../assets/home.svg";
import Letter from "../assets/letter.png";
import Phone from "../assets/phone.png";

function Contact() {
  return (
    <div className="bg-gray-200 mt-[60px] pl-[30px]">
      <h1 className="text-center font-bold text-xl mb-[30px] pt-[15px]">
        Contact Us
      </h1>
      <div className="flex mb-[10px]">
        <img src={Home} alt="home" className="pr-[10px]"/>
        <h3>
          KARTHIKESH ROBOTICS PRIVATE LIMITED 18.B-MANJANAKKARA,<br />
          STREET, South Gate, Madurai South, Madurai- 625001, Tamil Nadu
        </h3>
      </div>
      <div className="flex mb-[10px]">
        <img src={Letter} alt="letter" className="pr-[10px] w-[32px]"/>
        <h3>karthikeshrobotics@gmail.com</h3>
      </div>
      <div className="flex">
        <img src={Phone} alt="phone" className="pr-[10px] w-[32px]"/>
        <h3>+91-868083 54107</h3>
      </div>
      <h3 className="text-center mt-[20px]">
        &copy; 2024 All Rights Reserved | Karthikesh Robotics Private Limited
      </h3>
    </div>
  );
}

export default Contact;
