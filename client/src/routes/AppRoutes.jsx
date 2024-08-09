import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavLayout from '../components/commonComponents/NavLayout';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< NavLayout />}>
        <Route index element={< Home />} /> 
      </Route>
    </Routes>
  );
}

export default AppRoutes;
