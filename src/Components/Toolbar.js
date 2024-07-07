import React from "react";

const Toolbar = ({ selectedToolbarItem, setSelectedToolbarItem }) => {
  const handleClick = (item) => {
    setSelectedToolbarItem(item);
  };

  const toolbarItems = ["Refer", "Benefits", "FAQs", "Support"];

  return (
    <div className="bg-[#1A73E81C] rounded-[5rem] grid grid-cols-4 justify-center items-center gap-5 md:gap-7 p-3 pl-5 pr-5 mt-5 mb-5">
      {toolbarItems.map((item) => (
        <div
          key={item}
          onClick={() => handleClick(item)}
          className={`${
            selectedToolbarItem === item ? "text-[#1A73E8] border-b-2 border-[#1A73E8]" : ""
          }`}
          style={{ cursor: "pointer" , display: "flex" , justifyContent:"center" , alignItems:"center" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
