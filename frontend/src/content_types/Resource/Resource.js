import React from 'react';
import Embed from 'react-tiny-oembed'
import useApiRequest from '../../hooks/useApiRequest';

const Resource = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/resource/191eb35d-0b03-428e-9ef4-dbc9ca2f8cb7?include=field_topics,field_resource_type,field_resource_video,field_resource_pdf,field_resource_image');
  console.log(data);
  const renderTopics = data?.included?.map((el) => {
    if (el.type === "taxonomy_term--topics") {
      return (
        <li key={el.id} >{el.attributes.name}</li>
      );
    }
  });

  const renderResourceType = data?.included?.map((el) => {
    if (el.type === "taxonomy_term--resource_type") {
      return (
        <li key={el.id} >{el.attributes.name}</li>
      );
    }
  });

  const renderResourceVideo = data?.included?.map((el) => {
    if (el.type === "media--remote_video") {
      return (
        <Embed key={el.id} url={el.attributes.field_media_oembed_video} />
      );
    }
  });

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    <article key={data?.data?.id}>
      <h3>{data?.data?.attributes?.title}</h3>
      <div>Resource Author: {data?.data?.attributes?.field_resource_author}</div>
      <div>Publication Year: {data?.data?.attributes?.field_publicati}</div>
      <div>
        <span>Topics:</span>
        <ul>
          {renderTopics}
        </ul>
      </div>
      <div>
        <span>Resource Type:</span>
        <ul>
          {renderResourceType}
        </ul>
      </div>
      <div>Publication Year: {data?.data?.attributes?.field_publicati}</div>
      {renderResourceVideo}
      <div className="resource--body" dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.body.processed }}>
      </div>
    </article>
  );
}

export default Resource;