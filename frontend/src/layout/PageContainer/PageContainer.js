import React from 'react';
import { Routes, Route } from "react-router-dom";
import Resource from '../../content_types/Resource/Resource';

const PageContainer = () => {
  return (
    <div className="ui container">
        <Routes>
          <Route path="/resource_library" element={<Resource />} />
        </Routes>
    </div>
  )
};

export default PageContainer;