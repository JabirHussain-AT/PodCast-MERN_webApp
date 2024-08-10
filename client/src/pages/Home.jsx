import React, { useState } from "react";
import MainBanner from "../components/Home/MainBanner.jsx";
import TextArea from "../components/Home/TextArea.jsx";
import CreateButton from "../components/Home/CreateButton.jsx";
import ModalBox from "../components/commonComponents/ModalBox.jsx";
import ModalContent from "../components/Home/ModalContent.jsx";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Project Detials Modal Opening phase
  function handleCreateModal() {
    setIsOpen(true);
  }

  //function for closing modal
  function handleModalClose() {
    setIsOpen(false);
  }

  //text content
  let textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";

  return (
    <>
      <div className=" flex justify-center items-center w-full min-h-screen overflow-y-hidden fixed">
        <div className=" w-9/12 min-h-[80vh] mb-28 ">
          {/* Heading [ titile ] */}
          <div className="w-full h-auto">
            <h1 className="font-bold text-center m-8 font-roboto text-4xl text-primary">
              Create a New Project
            </h1>
            {/* Banner */}
            <div className="flex justify-center ">
              <MainBanner />
            </div>
            {/* Text Area */}
            <div className="flex  justify-center items-center md:pt-9 pb-6 md:px-24">
              <TextArea content={textContent} />
            </div>
            {/* Button Sec */}
            <div className="flex justify-center items-start font-roboto">
              <CreateButton clickFunction={handleCreateModal} />

              {isOpen && (
                <ModalBox ModalBox isOpen={isOpen}>
                  <ModalContent onClose={handleModalClose} />
                </ModalBox>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
