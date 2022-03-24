import React, { useEffect, useState } from 'react';
import Pager from '../components/Pager/Pager';
import ResourceTeaserContainer from '../containers/ResourceTeaserContainer';
import useApiRequest from '../hooks/useApiRequest';

const ResourceLibrary = () => {

  const [apiUrl, setApiUrl] = useState('http://backend.docksal.site/jsonapi/node/resource/?page%5Blimit%5D=10');

  useEffect(() => {
    setApiUrl('')
  }, [apiUrl]);

  const { error, isLoaded, data } = useApiRequest(apiUrl);

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  if (isLoaded && data.data) {
    if (data.data.length > 0) {
      console.log(data);
      return (
        <article>
          <h1>Resource Library</h1>
          <ResourceTeaserContainer data={data.data}/>
          <Pager urlApi={data.links.next.href} setApiUrl={setApiUrl}/>
        </article>
      );
    }
  }

  return <span>Loading...</span>
}

export default ResourceLibrary;