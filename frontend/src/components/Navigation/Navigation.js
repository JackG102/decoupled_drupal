import React, { useEffect, useState } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import NavigationLink from './NavigationLink/NavigationLink'

const Navigation = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/menu_items/main');

  const renderNavLinks = data.map((el) => {
    console.log(el);
    return (
      <NavigationLink props={el}/>
    )
  });

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    renderNavLinks
  );
};

export default Navigation;