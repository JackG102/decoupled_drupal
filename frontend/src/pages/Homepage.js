import React from 'react';
import useApiRequest from '../hooks/useApiRequest';

const Homepage = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/node/page/ae09fcfb-5d59-4d53-9583-05b286cac6e8');
  
  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    <article>
      <div className="homepage--body" dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.body.processed }}></div>
    </article>
  );
}

export default Homepage;