import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

const programData = [
  {
    name: "Professional Certificate Program in Product Management",
    discountedPrice: "₹ 7,000",
    originalPrice: "₹ 9,000",
    category: "Product Management",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    discountedPrice: "₹ 9,000",
    originalPrice: "₹ 11,000",
    category: "Product Management",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    discountedPrice: "₹ 10,000",
    originalPrice: "₹ 10,000",
    category: "Product Management",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    discountedPrice: "₹ 10,000",
    originalPrice: "₹ 10,000",
    category: "Digital Transformation",
  },
  {
    name: "Executive Program in Business Management",
    discountedPrice: "₹ 8,000",
    originalPrice: "₹ 10,000",
    category: "Business Management",
  },
  {
    name: "Fintech Executive Program",
    discountedPrice: "₹ 9,000",
    originalPrice: "₹ 9,000",
    category: "Fintech",
  },
  {
    name: "Senior Management Certificate",
    discountedPrice: "₹ 12,000",
    originalPrice: "₹ 15,000",
    category: "Senior Management",
  },
  {
    name: "Data Science Advanced Certification",
    discountedPrice: "₹ 11,000",
    originalPrice: "₹ 12,000",
    category: "Data Science",
  },
  {
    name: "Digital Transformation Specialist Program",
    discountedPrice: "₹ 10,000",
    originalPrice: "₹ 10,000",
    category: "Digital Transformation",
  },
];

const categories = [
  "All Programs",
  "Product Management",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
];

const ReferralBenefits = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPrograms =
    selectedCategory === "All Programs"
      ? programData
      : programData.filter((program) => program.category === selectedCategory);

  return (
    <div className="flex flex-col justify-around items-center p-2 mt-10 mb-10">
      <h2 className="font-bold text-[2rem]">
        What Are The <span className="text-[#1A73E8]">Referral Benefits?</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-around lg:items-start items-center p-3 gap-7">
        <div className="flex flex-col justify-around items-center rounded-lg shadow-lg overflow-hidden">
          {categories.map((category) => (
            <div
              key={category}
              className={`border-b-2 p-2 w-full flex justify-between items-center cursor-pointer gap-3 ${
                selectedCategory === category ? "bg-[#1A73E8] text-white" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category} <SlArrowRight className="text-[10px]" />
            </div>
          ))}
        </div>
        <table
          border="1"
          className="rounded-xl shadow-xl p-5 border border-black overflow-hidden font-roboto"
        >
          <thead className="bg-[#a2cbff] text-[#1350A0]">
            <tr>
              <th className="p-3 text-start border-r-2">Program Name</th>
              <th className="p-3 text-start border-r-2">Referrer Bonus</th>
              <th className="p-3 text-start">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrograms.map((program, index) => (
              <tr key={index}>
                <td className="p-3 border-r-2 flex items-center gap-3">
                  <img src="images/Group.png" alt="icon" className="h-[1rem]" />
                  {program.name}
                </td>
                <td className="p-3 border-r-2">{program.discountedPrice}</td>
                <td className="p-3">{program.originalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralBenefits;
