import React from 'react';
import './Heading.css';

export const Heading = (props) => {
  return (
    <h2 className="heading">{props.name}</h2>
  );
}