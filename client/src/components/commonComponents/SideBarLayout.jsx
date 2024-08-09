import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarLayout = () => {
  return (
    <>
      <div className="bg-red-100 w-full min-h-screen">
            < SideBar />
            < Outlet />
      </div>
    </>
  );
};

export default SideBarLayout;
