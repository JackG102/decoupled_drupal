import React from 'react';
import { Link } from "react-router-dom";

const NavigationLink = ({props}) => {
  return (
    <Link className="item" to={props.attributes.url}>{props.attributes.title}</Link>
  );
}

export default NavigationLink;