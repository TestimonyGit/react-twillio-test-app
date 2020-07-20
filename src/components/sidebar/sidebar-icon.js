import React from 'react';
import styles from './sidebar-icon.module.css';

function SidebarIcon(props) {
  const icon = props.icon ? props.icon : '';
  const text = props.text ? <span>{props.text}</span> : '';

  return (
    <a 
      href="/"
      className={styles['sidebar-icon']}>
      {icon}
      {text}
    </a>
  );
}

export default SidebarIcon;
