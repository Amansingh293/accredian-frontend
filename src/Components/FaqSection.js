import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {
  const [selected, setSelected] = useState("");

  const toggleDropdown = (item) => {
    setSelected(selected === item ? "" : item);
  };

  return (
    <div className="flex flex-col p-5 items-center">
      <h1 className="font-bold text-[2rem]">Frequently Asked Questions</h1>

      <div className="flex flex-col md:flex-row gap-5 justify-around items-center md:items-start pt-7">
        <div className="flex flex-row md:flex-col items-center justify-center gap-3">
          <Button
            className={"rounded-lg text-[#1A73E8] shadow-xl p-2 border-[1px]"}
            text={"Eligibility"}
            onClick={() => toggleDropdown("1")}
          />
          <Button
            className={"rounded-lg text-[#1A73E8] shadow-xl p-2 border-[1px]"}
            text={"How To Use ?"}
            onClick={() => toggleDropdown("2")}
          />
          <Button
            className={"rounded-lg text-[#1A73E8] shadow-xl p-2 border-[1px]"}
            text={"Terms & Conditions"}
            onClick={() => toggleDropdown("3")}
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <div
            className="flex justify-between items-center cursor-pointer  border rounded-lg shadow-lg p-2"
            onClick={() => toggleDropdown("1")}
          >
            <span>
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </span>
            <FontAwesomeIcon
              icon={selected === "1" ? faChevronUp : faChevronDown}
            />
          </div>
          {selected === "1" && (
            <div className="mt-2 border rounded-lg shadow-lg p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nunc vel ex vehicula, id sagittis lacus efficitur. Integer
              sit amet lectus eget urna venenatis faucibus a a felis. Morbi
              vitae sem eget eros sagittis accumsan. Aliquam erat volutpat.
              Fusce hendrerit nisi ut turpis venenatis, nec auctor libero
              scelerisque. Nullam euismod ligula vel ligula dictum, at vulputate
              metus dictum. Donec et enim massa. Quisque vel lectus auctor,
              placerat nisi in, condimentum nulla. Integer cursus nulla ac orci
              sodales, nec cursus urna egestas. Aenean euismod, est et auctor
              ultrices, ipsum purus ullamcorper orci, sit amet sagittis mauris
              metus id justo.
            </div>
          )}

          <div
            className="flex justify-between items-center cursor-pointer mt-4 border rounded-lg shadow-lg p-2 "
            onClick={() => toggleDropdown("2")}
          >
            <span>How can I use the platform effectively?</span>
            <FontAwesomeIcon
              icon={selected === "2" ? faChevronUp : faChevronDown}
            />
          </div>
          {selected === "2" && (
            <div className="mt-2 border rounded-lg shadow-lg p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nunc vel ex vehicula, id sagittis lacus efficitur. Integer
              sit amet lectus eget urna venenatis faucibus a a felis. Morbi
              vitae sem eget eros sagittis accumsan. Aliquam erat volutpat.
              Fusce hendrerit nisi ut turpis venenatis, nec auctor libero
              scelerisque. Nullam euismod ligula vel ligula dictum, at vulputate
              metus dictum. Donec et enim massa. Quisque vel lectus auctor,
              placerat nisi in, condimentum nulla. Integer cursus nulla ac orci
              sodales, nec cursus urna egestas. Aenean euismod, est et auctor
              ultrices, ipsum purus ullamcorper orci, sit amet sagittis mauris
              metus id justo.
            </div>
          )}

          <div
            className="flex justify-between items-center cursor-pointer mt-4  border rounded-lg shadow-lg p-2"
            onClick={() => toggleDropdown("3")}
          >
            <span>What are the terms and conditions?</span>
            <FontAwesomeIcon
              icon={selected === "3" ? faChevronUp : faChevronDown}
            />
          </div>
          {selected === "3" && (
            <div className="mt-2 border rounded-lg shadow-lg p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nunc vel ex vehicula, id sagittis lacus efficitur. Integer
              sit amet lectus eget urna venenatis faucibus a a felis. Morbi
              vitae sem eget eros sagittis accumsan. Aliquam erat volutpat.
              Fusce hendrerit nisi ut turpis venenatis, nec auctor libero
              scelerisque. Nullam euismod ligula vel ligula dictum, at vulputate
              metus dictum. Donec et enim massa. Quisque vel lectus auctor,
              placerat nisi in, condimentum nulla. Integer cursus nulla ac orci
              sodales, nec cursus urna egestas. Aenean euismod, est et auctor
              ultrices, ipsum purus ullamcorper orci, sit amet sagittis mauris
              metus id justo.
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-9 md:gap-0 bg-[#1A73E8] p-7 w-full justify-around rounded-lg shadow-lg items-center mt-10 mb-10">
        <img
          src="images/headphone.png"
          alt="icon"
          className="h-[5rem] w-[5rem]"
        />
        <div className="flex flex-col text-white">
          <p className="font-semibold text-[1.3rem]">
            Want to delve deeper into the program?
          </p>
          <p>Want to delve deeper into the program?</p>
        </div>
        <Button
          className={"bg-white rounded-lg shadow-xl h-[3rem] w-[10rem]"}
          text={"Get In Touch"}
        />
      </div>
    </div>
  );
};

export default FaqSection;
