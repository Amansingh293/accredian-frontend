import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Toolbar from "../../Components/Toolbar";
import Herosection from "../../Components/Herosection";
import HowDoIReferSection from "../../Components/HowDoIReferSection";
import FaqSection from "../../Components/FaqSection";
import Footer from "../../Components/Footer";
import ReferralBenefits from "../../Components/ReferralBenefits";
import Modal from "../../Components/Modal";

const HomePage = () => {
  const [selectedToolbarItem, setSelectedToolbarItem] = useState("Refer");

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col justify-around items-center h-full w-full ${
          modalOpen ? "opacity-5" : ""
        } `}
      >
        <div className="bg-blue-200 w-full flex justify-center items-center p-2 gap-5">
          <p>Navigate your ideal career path with tailored expert advice</p>
          <p className=" text-[#1A73E8] font-semibold md:text-[1.2rem]">
            contact expert
          </p>
        </div>

        <Navbar />

        <Toolbar
          selectedToolbarItem={selectedToolbarItem}
          setSelectedToolbarItem={setSelectedToolbarItem}
        />

        <Herosection modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <ReferralBenefits />
        <HowDoIReferSection modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <FaqSection />

        <Footer />
      </div>
      {modalOpen && <Modal />}
    </>
  );
};

export default HomePage;
