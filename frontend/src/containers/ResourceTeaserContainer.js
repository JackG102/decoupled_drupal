import React from 'react';
import ResourceTeaser from '../components/teaser/resource_teaser/ResourceTeaser';

const ResourceTeaserContainer = (data) => {

  const renderResourceTeasers = data.data.map((el) => {
    return <span>{el?.attributes?.title}</span>
  });

  return (
    <div className="container--resource_teasers">
      {renderResourceTeasers}
    </div>
  );
}

export default ResourceTeaserContainer;