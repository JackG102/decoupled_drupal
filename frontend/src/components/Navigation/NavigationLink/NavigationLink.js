import React from 'react';

const NavigationLink = (link, linkText) => {
  return (
    <a href={link}>{linkText}</a>
  );
}

export default NavigationLink;