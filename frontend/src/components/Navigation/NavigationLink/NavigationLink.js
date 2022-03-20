import React from 'react';

const NavigationLink = ({props}) => {
  return (
    <a className="item" href={props.attributes.link}>{props.attributes.title}</a>
  );
}

export default NavigationLink;