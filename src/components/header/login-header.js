import React from 'react';
import styles from './login-header.module.css';
import {ReactComponent as Dropdown} from '../../assets/svgs/Dropdown.svg';

function LoginHeader() {
  return (
    <button
      className={styles['login-header']}>
      <span>leo@truecare24.com</span>
      <Dropdown/>
    </button>
  );
}

export default LoginHeader;
