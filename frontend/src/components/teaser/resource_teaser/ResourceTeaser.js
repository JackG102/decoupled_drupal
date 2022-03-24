import React from 'react';

const ResourceTeaser = ({url, title, publication_year, author}) => {
  return (
    <div className="teaser--resource item content">
      <div className="content">
        <a href={url}><h3 className="header">{title}</h3></a>
        <div className="description">
          <span>{publication_year}</span>
          <br />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceTeaser;