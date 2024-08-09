import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/NavBar/Logo.png";

const SideBar = () => {
  return (
    <>
      <div className="w-3/12 min-h-screen fixed bg-bg_sidebar font-roboto ">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={Logo} alt="Logo" title="home" className="w-40 p-5" />
          </NavLink>
          <p className="font-roboto text-sm pl-5"> Podcast Upload Flow </p>
          {/* NavLink */}
          <div className="w-full flex-col items-center my-3">
            {/* Each item in side bar */}
          <div className="w-11/12 rounded-3xl mb-2 bg-primary ">
            <NavLink to={"/projects"}>
              <div className=" text-white flex gap-3 items-center h-10">
                <span className="bg-violet-950 rounded-full px-2 ml-3 "> 1 </span> <p className="text-sm font-roboto"> Projects </p>{" "}
              </div>
            </NavLink>
          </div>
          {/* each items ends */}
            <NavLink to={"/widgets"}></NavLink>
            <NavLink to={"/deployment"}></NavLink>
            <NavLink to={"/Pricing"}></NavLink>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
