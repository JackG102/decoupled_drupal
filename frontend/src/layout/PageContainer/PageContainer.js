import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../../pages/Homepage';
import Resource from '../../content_types/Resource/Resource';
import ResourceLibrary from '../../pages/ResourceLibrary';

const PageContainer = () => {
  return (
    <div className="ui container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resource_library" element={<ResourceLibrary />} />
          <Route path="/resource/:resourceId" element={<Resource />} />
        </Routes>
    </div>
  )
};

export default PageContainer;