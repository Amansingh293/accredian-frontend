import React from "react";
import Button from "./Button";

const HowDoIReferSection = ({modalOpen , setModalOpen}) => {
  return (
    <div className="flex w-full bg-[#EEF5FF] gap-10 flex-col mt-10 items-center p-10">
      
      <h1 className=" text-[2rem] font-[700]">
        How Do I <span className="text-[#1A73E8]">Refer</span>
      </h1>


      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-evenly w-full items-center">
        <div className="rounded-[50%] shadow-2xl flex flex-col justify-center items-center p-12 gap-3">
          <img src="images/addlogo.png" alt="icon" className="h-[2rem]"/>
          <p style={{ width: "102px", fontSize: "10px" }}>
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className="rounded-[50%] shadow-2xl flex flex-col justify-center items-center p-12 gap-3">
          <img src="images/notes.png" alt="icon" className="h-[2rem]"/>
          <p style={{ width: "102px", fontSize: "10px" }}>
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <div className="rounded-[50%] shadow-2xl flex flex-col justify-center items-center p-12 gap-3">
          <img src="images/wallet.png" alt="icon" className="h-[2rem]"/>
          <p style={{ width: "102px", fontSize: "10px" }}>
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
      </div>

      <Button className={"bg-[#1A73E8] p-3 rounded-md text-white w-[10rem]"} text={"Refer Now"}  onClick={()=>setModalOpen(!modalOpen)}/>
    </div>
  );
};

export default HowDoIReferSection;
