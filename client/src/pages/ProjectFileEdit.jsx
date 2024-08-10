import React, { useState } from "react";
import SecondNav from "../components/commonComponents/SecondNav";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProjectFileEdit = () => {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate()

  const handleUpdate = ( ) =>{
    console.log('axios venam ivde ')
  }

  let temp =
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains";

  return (
    <div className="w-full justify-center items-center">
      <SecondNav projectName={"Sample Project"} pageName={"Edit Transcript"} />
      {/* Heading Section */}
      <div className="w-11/12 my-8 ">
        <div className="w-full flex justify-between">
          <h1 className="text-2xl font-bold font-roboto text-primary  ">
            {" "}
            Edit Transcript{" "}
          </h1>
          {editMode && (
            <div className="flex gap-3">
              <button className="border border-red-700 rounded-md py-1 px-4 text-red-700 font-roboto font-semibold ">Discard</button>
              <button className="bg-gray-900 text-white py-1 px-4 rounded-md" > Save & exit </button>
            </div>
          )}
        </div>
        {/* end */}
        <div className="border border-primary rounded-md mt-5 max-h-[100%]  h-auto font-roboto text-sm ">
          <div className="w-full flex justify-between items-center p-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-gray-700 duration-500 text-white px-3 py-1 rounded-xl text-sm hover:bg-gray-900  font-roboto"
            >
              {" "}
              <span> </span> Edit Mode{" "}
            </button>
            <  IoSearchCircleOutline className="text-2xl text-primary" />
          </div>
          <p className="overflow-y-auto h-96 p-4">{temp}</p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ProjectFileEdit;
