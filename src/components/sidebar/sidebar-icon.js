import React from 'react';
import './sidebar-icon.css';

function SidebarIcon(props) {
  const icon = props.icon ? props.icon : '';
  const text = props.text ? <span>{props.text}</span> : '';

  return (
    <a 
      href="/"
      className="sidebar-icon">
      {icon}
      {text}
    </a>
  );
}

export default SidebarIcon;
