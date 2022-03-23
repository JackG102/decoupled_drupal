import React from 'react';
import ResourceTeaserContainer from '../containers/ResourceTeaserContainer';
import useApiRequest from '../hooks/useApiRequest';

const ResourceLibrary = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/resource');

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  if (isLoaded && data.data) {
    if (data.data.length > 0) {
      return (
        <article>
          <h1>Resource Library</h1>
          <ResourceTeaserContainer data={data.data}/>
        </article>
      );
    }
  }

  return <span>Loading...</span>
}

export default ResourceLibrary;