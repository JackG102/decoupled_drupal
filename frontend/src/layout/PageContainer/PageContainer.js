import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../../pages/Homepage';
import ResourceLibrary from '../../pages/ResourceLibrary';

const PageContainer = () => {
  return (
    <div className="ui container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resource_library" element={<ResourceLibrary />} />
        </Routes>
    </div>
  )
};

export default PageContainer;