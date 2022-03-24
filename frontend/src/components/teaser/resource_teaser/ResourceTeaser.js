import React from 'react';
import { Link } from "react-router-dom";

const ResourceTeaser = ({url, title, publication_year, author}) => {
  return (
    <div className="teaser--resource item content">
      <div className="content">
        <Link to={`../resource/${url}`}><h3 className="header">{title}</h3></Link>
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