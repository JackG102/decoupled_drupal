import React from 'react';

const ResourceTeaser = (url, title, publication_year, author) => {
  return (
    <a href={url}>
      <div className="teaser--resource">
        <h3>{title}</h3>
        <div>
          {publication_year}
          {author}
        </div>
      </div>
    </a>
  );
};

export default ResourceTeaser;