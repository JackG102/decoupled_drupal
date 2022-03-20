import React from 'react';
import useApiRequest from '../../hooks/useApiRequest';

const Resource = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/resource/191eb35d-0b03-428e-9ef4-dbc9ca2f8cb7');

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    <div>
      <h3>Resource</h3>
    </div>
  );
}

export default Resource;