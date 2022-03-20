import React from 'react';

const NavigationLink = ({props}) => {
  return (
    <a className="item" href={props.attributes.url}>{props.attributes.title}</a>
  );
}

export default NavigationLink;