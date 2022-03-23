import React, { useEffect, useState } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import NavigationLink from './NavigationLink/NavigationLink'

const Navigation = () => {

  const { error, isLoaded, data } = useApiRequest('http://backend.docksal.site/jsonapi/menu_items/main');

  const renderNavLinks = data?.data?.map((el) => {
    return (
      <NavigationLink key={el.id} props={el}/>
    )
  });

  if (!isLoaded) {
    return <span>Loading...</span>
  };

  return (
    <div className="ui attached stackable menu">
        <div className="ui container">
          {renderNavLinks}
        </div>
    </div>
  );
};

export default Navigation;