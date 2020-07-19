import React from 'react';
import './sidebar-icon.css';

function SidebarIcon(props) {
  const icon = props.icon ? props.icon : '';
  const text = props.text ? <span>{props.text}</span> : '';

  return (
    <div className="sidebar-icon">
      {icon}
      {text}
    </div>
  );
}

export default SidebarIcon;
