import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationLink from './NavigationLink/NavigationLink'

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://backend.docksal.site/jsonapi/menu_items/main').then(response => {
      setData(response.data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <span>Loading...</span>
  };

  if (!isLoading) {
    const renderNavLinks = data.map((el) => {
      console.log(el);
      return (
        <a href={el.attributes.url}>{el.attributes.title}</a>
      )
    });
    return (
      renderNavLinks
    );
  }
};


export default Navigation;