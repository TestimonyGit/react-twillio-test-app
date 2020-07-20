import React from 'react';
import styles from './actions.module.css';

function Actions() {
  return (
    <ul 
      className={styles.actions}>
      <li><a href='/'>Send intro</a></li>
      <li><a href='/'>Provide feedback</a></li>
      <li><a href='/'>Send reminder</a></li>
      <li><a href='/'>Background check</a></li>
    </ul>
  );
}

export default Actions;
