import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavLayout from '../components/commonComponents/NavLayout';
import Home from '../pages/Home';
import SideBarLayout from '../components/commonComponents/SideBarLayout';
import UploadPage from '../pages/UploadPage';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< NavLayout />}>
        <Route index element={< Home />} /> 
      </Route>
      <Route path="/upload" element={< SideBarLayout />}>
        <Route index element={< UploadPage /> } /> 
      </Route>
    </Routes>
  );
}

export default AppRoutes;
