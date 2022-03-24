import React from 'react';
import ResourceTeaser from '../components/teaser/resource_teaser/ResourceTeaser';

const ResourceTeaserContainer = (data) => {

  const renderResourceTeasers = data.data.map((el) => {
    return (
      <article key={el.id}>
        <ResourceTeaser 
          title={el?.attributes?.title}
          publication_year={el?.attributes?.field_publicati}
          author={el?.attributes?.field_resource_author}
          url={`resource/${el?.id}`}
        />
        <hr />
      </article>
    );
  });

  return (
    <div className="container--resource_teasers ui items">
      {renderResourceTeasers}
    </div>
  );
}

export default ResourceTeaserContainer;