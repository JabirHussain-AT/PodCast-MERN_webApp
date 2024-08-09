import React from "react";
import MainBanner from "../components/Home/MainBanner.jsx";
import TextArea from "../components/Home/TextArea.jsx";
import AddIcon from "../assets/Home/AddIcon.png";

const Home = () => {
  //text content
  let textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";

  return (
    <>
      <div className=" flex justify-center items-center w-full min-h-screen overflow-y-hidden">
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
            <div className="flex  justify-center items-center pt-9 pb-6 px-24">
              <TextArea content={textContent} />
            </div>
            {/* Button Sec */}
            <div className="flex justify-center items-start font-roboto">
              <button className="flex items-center justify-center gap-3 bg-createButton text-white px-3 py-2 rounded-md hover:scale-x-95 duration-500">
                {" "}
                <img
                  src={AddIcon}
                  alt="addIcon"
                  title="create"
                  className="w-4"
                />{" "}
                Create New Project{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
