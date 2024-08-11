import React, { useContext, useState, useEffect } from "react";
import MainBanner from "../components/Home/MainBanner.jsx";
import TextArea from "../components/Home/TextArea.jsx";
import CreateButton from "../components/Home/CreateButton.jsx";
import ModalBox from "../components/commonComponents/ModalBox.jsx";
import ModalContent from "../components/Home/ModalContent.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import GoogleLoginContent from "../components/Home/GoogleLoginContent.jsx";
import Loading from "../components/commonComponents/Loading.jsx";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, isLoading } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  }, [isAuthenticated]);

  // Project Details Modal Opening phase
  function handleCreateModal() {
    if (isAuthenticated) {
      setIsOpen(true);
    } else {
      setShowAuthModal(true);
    }
  }

  // Function for closing modal
  function handleModalClose() {
    setIsOpen(false);
  }

  // Function for closing auth modal
  function handleAuthModalClose() {
    setShowAuthModal(false);
  }

  // Function to handle successful authentication
  function handleAuthSuccess() {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  }

  // Text content
  let textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";

  return (
    <>
    {/*  */}
      {isLoading && (
        <div className="fixed rounded-md inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center ">
          <div className="w-[600px]  bg-white rounded-md p-2 ">
            <div className="bg-white p-2 text-black">< Loading /> </div>
          </div>
        </div>
      )}
      {/*  */}
      <div className="flex justify-center items-center w-full min-h-screen overflow-y-hidden fixed">
        <div className="w-9/12 min-h-[80vh] mb-28">
          {/* Heading [title] */}
          <div className="w-full h-auto">
            <h1 className="font-bold text-center m-8 font-roboto text-4xl text-primary">
              Create a New Project
            </h1>
            {/* Banner */}
            <div className="flex justify-center">
              <MainBanner />
            </div>
            {/* Text Area */}
            <div className="flex justify-center items-center md:pt-9 pb-6 md:px-24">
              <TextArea content={textContent} />
            </div>
            {/* Button Sec */}
            <div className="flex justify-center items-start font-roboto">
              <CreateButton clickFunction={handleCreateModal} />

              {isOpen && (
                <ModalBox isOpen={isOpen}>
                  <ModalContent onClose={handleModalClose} />
                </ModalBox>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {!isAuthenticated && (
        <ModalBox isOpen={showAuthModal}>
          <GoogleLoginContent
            onClose={handleAuthModalClose}
            onAuthSuccess={handleAuthSuccess}
          />
        </ModalBox>
      )}
    </>
  );
};

export default Home;
