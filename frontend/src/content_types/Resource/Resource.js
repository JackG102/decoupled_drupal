import React from 'react';
import useApiRequest from '../../hooks/useApiRequest';

const Resource = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/resource/191eb35d-0b03-428e-9ef4-dbc9ca2f8cb7?include=field_topics');

  if (!isLoaded) {
    return <span>Loading...</span>
  };
  console.log(data);
  return (
    <article>
      <h3>{data?.data?.attributes?.title}</h3>
      <span>Resource Author: {data?.data?.attributes?.field_resource_author}</span>
      <span>Publication Year: {data?.data?.attributes?.field_publicati}</span>
      <div className="resource--body" dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.body.processed }}>
      </div>
    </article>
  );
}

export default Resource;