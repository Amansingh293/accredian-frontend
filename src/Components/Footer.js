import React from "react";
import Button from "./Button";
import { FaLinkedin, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#282828] text-white flex flex-col w-full items-center">
      <div className="w-[80%] flex justify-between items-center border-b-2 border-white p-4 flex-col md:flex-row gap-9 md:gap-0">
        <img src="images/accred.png" alt="icon" />
        <div className="flex flex-col gap-3">
          <Button
            className={"bg-[#007BFF] text-white p-3 rounded-lg shadow-lg"}
            text={"Schedule 1-on-1 Call Now"}
          />
          <p>Speak with our Learning Advisor</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-7 w-[80%] gap-9 md:gap-4">
        <div className="flex flex-col gap-5 items-start md:w-[20%]">
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
          <div>Programs</div>
        </div>
        <div className="flex flex-col items-start gap-5 md:items-center md:w-[60%]">
          <h1>Contact Us</h1>
          <p>
            Email us (For Data Science Queries): admissions@accredian.com Email
            us (For Product Management Queries):pm@accredian.com Data Science
            Admission Helpline:+91 9079653292 (9 AM - 7 PM) Product Management
            Admission Helpline:+91 9625811095 Enrolled Student Helpline: +91
            7969322507 Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
            Sector 18, Gurugram, Haryana 122015
          </p>
          <p>Why Accredian</p>
          <p>Follow Us</p>
          <div className="flex text-white gap-3 items-center">
            <FaSquareFacebook />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagramSquare />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-end md:w-[20%]">
          <h1>Accredian</h1>
          <p>Accredian</p>
          <p>Accredian</p>
          <p>Accredian</p>
          <p>Accredian</p>
          <p>Accredian</p>
          <p>Accredian</p>
          <p>Accredian</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
