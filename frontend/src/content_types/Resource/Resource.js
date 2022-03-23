import React from 'react';
import useApiRequest from '../../hooks/useApiRequest';

const Resource = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/resource/191eb35d-0b03-428e-9ef4-dbc9ca2f8cb7?include=field_topics');

  const renderTopics = data?.included?.map((el) => {
    if (el.type === "taxonomy_term--topics") {
      return (
        <li>{el.attributes.name}</li>
      );
    }
  });

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    <article>
      <h3>{data?.data?.attributes?.title}</h3>
      <div>Resource Author: {data?.data?.attributes?.field_resource_author}</div>
      <div>Publication Year: {data?.data?.attributes?.field_publicati}</div>
      <div>
        <span>Topics:</span>
        <ul>
          {renderTopics}
        </ul>
      </div>
      <div className="resource--body" dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.body.processed }}>
      </div>
    </article>
  );
}

export default Resource;