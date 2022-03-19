import React from 'react';
import useApiRequest from '../../hooks/useApiRequest';

const Navigation = () => {

  const { data, error, isLoaded } = useApiRequest(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <nav>
      Navigation component
    </nav>
  );
}

export default Navigation;