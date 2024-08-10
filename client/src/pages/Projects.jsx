import React, { useState } from "react";
import ModalBox from "../components/commonComponents/ModalBox";
import ModalContent from "../components/Home/ModalContent";
import BacktoHome from "../components/commonComponents/BacktoHome";
import CreateButton from "../components/Home/CreateButton";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      projectName: "Sample Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
    {
      projectName: "Main Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
    {
      projectName: "Sample Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
    {
      projectName: "Sample Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
    {
      projectName: "Sample Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
    {
      projectName: "Sample Project",
      totalEpisodes: 4,
      update: "Last update a week Ago",
    },
  ]);

  //Project Detials Modal Opening phase
  function handleCreateModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full  min-h-screen flex justify-center">
      <div className="w-10/12">
        <div className="w-2/12 pl-2 ">
          <BacktoHome />
        </div>
        {/* Title Section */}
        <div className="flex justify-center w-full">
          <div className="pl-2 my-3 md:my-6 w-full flex justify-between">
            <h1 className=" text-primary text-lg md:text-3xl font-roboto font-bold">
              Projects
            </h1>
            {/* button */}
            <CreateButton clickFunction={handleCreateModal} />
            {isOpen && (
              <ModalBox ModalBox isOpen={isOpen}>
                <ModalContent onClose={() => setIsOpen(false)} />
              </ModalBox>
            )}
          </div>
        </div>
        {/* main section */}
        <div className="w-full md:h-96 flex-wrap flex justify-between gap-3 items-center">
          {projects && projects?.length > 1 ? (
            projects?.map((item, index) => (
              <div onClick={ () => navigate(`/project/upload/${ index }`) } className="w-5/12 md:w-3/12  flex items-center border shadow-lg border-black rounded-md min-h-24 hover:scale-110 duration-300 cursor-pointer hover:shadow-xl">
                <div
                  className={`m-2 rounded-md w-1/4 h-16 ${
                    index % 2 === 1 ? "bg-primary" : "bg-orange-500"
                  }`}
                >
                  <h2 className="font-bold font-roboto text-lg md:text-3xl pt-4 text-white flex justify-center items-center">
                    {item?.projectName
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </h2>
                </div>
                <div className="font-roboto ml-2">
                  <h1 className="text-md font-semibold text-primary">
                    {item?.projectName}
                  </h1>
                  <p className="text-xs"> {item?.totalEpisodes} Episodes</p>
                  <p className="text-[10px] text-gray-500 mt-3">
                    {" "}
                    {item?.update}{" "}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>No projects available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
