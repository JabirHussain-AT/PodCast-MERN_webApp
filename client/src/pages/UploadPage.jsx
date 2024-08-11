import React, { useState } from "react";
import SecondNav from "../components/commonComponents/SecondNav";
import UploadBox from "../components/UploadPage/UploadBox";
import DataTable from "../components/UploadPage/DataTable";
import ModalBox from "../components/commonComponents/ModalBox";
import UploadInput from "../components/UploadPage/UploadInput";
import toast from "react-hot-toast";

const UploadPage = () => {
  const uploadedItems = []; // Simulate uploaded items. If there are items, populate this array.
  const [isOpen, setIsOpen] = useState(false);
  let projectName = "Sample Project";

  const uploadMethods = [
    {
      platform: "youtube",
      icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png",
      text: "Upload YouTube video",
    },
    {
      platform: "Spotify",
      icon: "https://cdn1.iconfinder.com/data/icons/social-media-brush-style/100/social_media_icon-25-64.png",
      text: "Upload Spotify podcast",
    },
    {
      platform: "Rss Feed",
      icon: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/rss-64.png",
      text: "Upload from RSS Feed",
    },
    {
      platform: "youtube",
      icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png",
      text: "Upload YouTube video",
    },
    {
      platform: "Spotify",
      icon: "https://cdn1.iconfinder.com/data/icons/social-media-brush-style/100/social_media_icon-25-64.png",
      text: "Upload Spotify podcast",
    },
    {
      platform: "Rss Feed",
      icon: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/rss-64.png",
      text: "Upload from RSS Feed",
    },
  ];

  //handleUpdate
  const handleUpdate = (data) => {
    toast.success("upload success", 3000);
  };

  //showing 3 methords if it the data is there
  const displayMethods =
    uploadedItems.length > 0 ? uploadMethods.slice(0, 3) : uploadMethods;

  return (
    <div className="w-full">
      {/* Nav */}
      <SecondNav projectName={"Sample Project"} pageName={"Upload"} />
      {/* ModalBox */}
      <ModalBox isOpen={isOpen}>
        <UploadInput
          onClose={() => setIsOpen(false)}
          onUpdate={(data) => handleUpdate(data)}
        />
      </ModalBox>
      {/*  */}
      <div className="w-full flex justify-start items-center ">
        <div className="w-11/12 mt-10 mb-t ml-1">
          <h1 className="font-bold text-2xl font-roboto text-primary ">
            {uploadedItems?.length < 1
              ? "Uploads"
              : `${projectName ?? "Sample Project"} `}
          </h1>

          <div className="py-5 mt-4 flex flex-wrap justify-between gap-2">
            {displayMethods && displayMethods.length > 0 ? (
              displayMethods.map((item, index) => (
                <div
                  onClick={() => setIsOpen(true)}
                  key={index}
                  className="border-2-black w-5/12  md:w-3/12 rounded-md h-auto mb-3 cursor-pointer"
                >
                  <div className="flex w-full justify-center items-center border border-black rounded-md">
                    <div className="w-8 md:w-12 m-2 rounded-full min-h-12">
                      <img
                        src={item.icon}
                        alt="Logo"
                        className="w-8 mx-2 my-3 object-fill "
                      />
                    </div>
                    <p className="font-roboto font-semibold text-sm md:text-sm ml-2 ">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>No Upload Methods Available</div>
            )}
          </div>

          {uploadedItems.length === 0 ? (
            <div>
              {/* upload section */}
              <div className="w-full text-gray-500 text-center mb-3">or</div>
              <div onClick={ ( ) => setIsOpen( true ) } className="curser-pointer">
                <UploadBox />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="w-full bg-primary rounded-md h-auto mb-4 flex justify-between items-center">
                <p className="text-white font-roboto px-6 ">All files are processed! Your widget is ready to go!</p>
                <button className="bg-white py-2 px-3 rounded-md m-2 font-semibold text-sm" >Try it Out! </button>
                 </div>
              {/* Uploaded items table */}
              <DataTable dataUploaded={uploadedItems} />
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UploadPage;
