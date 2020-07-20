import React from 'react';
import './icon-button.css';

function IconButton(props) {
  const icon = props.icon ? props.icon : '';
  const textClasses = props.bold === true ? 'bold' : '';
  const text = props.text ? <span className={textClasses}>{props.text}</span> : '';

  return (
    <a 
      href="/"
      className='icon-button'>
      {icon}
      {text}
    </a>
  );
}

export default IconButton;
