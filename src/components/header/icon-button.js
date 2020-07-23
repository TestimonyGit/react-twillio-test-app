import React from 'react';
import styles from './icon-button.module.css';

function IconButton(props) {
  const icon = props.icon ? props.icon : '';
  const textClasses = props.bold === true ? styles.bold : '';
  const text = props.text ? <span className={textClasses}>{props.text}</span> : '';
  const buttonClasses = props.mobileScreenOnly ? styles['icon-button'] + ' ' + styles['mobile'] : styles['icon-button'];

  return (
    <button
      onClick={props.onclick ? props.onclick : null}
      className={buttonClasses}>
      {icon}
      {text}
    </button>
  );
}

export default IconButton;
