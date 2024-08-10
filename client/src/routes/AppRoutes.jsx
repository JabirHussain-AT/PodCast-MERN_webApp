import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UploadPage from "../pages/UploadPage";
import Projects from "../pages/Projects";
import NavLayout from "../components/commonComponents/NavLayout";
import SideBarLayout from "../components/commonComponents/SideBarLayout";
import WidgetConfigurations from "../pages/WidgetConfigurations";
import ProjectFileEdit from "../pages/ProjectFileEdit";

function AppRoutes() {
  return (
    <Routes>
      {/* Home Section */}
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Project Section */}
      <Route path="/projects" element={<NavLayout />}>
        <Route index element={< Projects />} />
      </Route>

      {/* Upload Section */}
      <Route path="project" element={<SideBarLayout />}>
        <Route path='upload/:projectId' element={<UploadPage />} />
        <Route path=':projectId/file/edit/:fileId' element={< ProjectFileEdit />} />
        <Route path='widget/config/:projectId' element={< WidgetConfigurations />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
