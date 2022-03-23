import React from 'react';
import { Routes, Route } from "react-router-dom";
import Resource from '../../content_types/Resource/Resource';
import Homepage from '../../pages/Homepage';

const PageContainer = () => {
  return (
    <div className="ui container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resource_library" element={<Resource />} />
        </Routes>
    </div>
  )
};

export default PageContainer;