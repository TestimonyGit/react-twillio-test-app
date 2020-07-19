import React from 'react';
import './dashboard-icon.css';

function DashboardIcon(props) {
  return (
    <div className="dashboard-icon">
      {props.icon}
      <span>{props.text}</span>
    </div>
  );
}

export default DashboardIcon;
