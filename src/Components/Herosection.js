import React from "react";
import Button from "./Button";

const Herosection = ({modalOpen , setModalOpen}) => {
  return (
    <div className="bg-[#1A73E81C] rounded-xl shadow-xl flex flex-col md:flex-row justify-around gap-6 lg:gap-4 items-center p-3 relative">
      <div className="flex flex-col font-roboto md:w-[30%] gap-5 h-[70%] justify-end">
        <h1 className="font-[700] text-[2rem] md:text-[2.5rem]">Let’s Learn & Earn</h1>
        <p className=" text-[1.1rem] md:text-[1.5rem]">
          Get a chance to win up-to
          <span className="text-[#1A73E8]"> Rs. 15,000</span>
        </p>
        <Button className={"bg-[#1A73E8] p-2 rounded-lg shadow-lg w-[10rem] text-white"} text={"Refer Now"} onClick={()=>setModalOpen(!modalOpen)}/>
      </div>

      <div className="h-[20rem] w-[20rem] lg:w-[25rem]">
        <img
          src="images/Anniversary.png"
          alt=""
          className="h-[22rem] absolute bottom-[-14px] right-2 md:right-[2rem]"
        />
      </div>
    </div>
  );
};

export default Herosection;
