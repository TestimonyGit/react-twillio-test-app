import React from 'react';
import styles from './login-header.module.css';
import {ReactComponent as Dropdown} from '../../assets/svgs/Dropdown.svg';

function LoginHeader() {
  return (
    <a 
      className={styles['login-header']}
      href="/">
      <span>leo@truecare24.com</span>
      <Dropdown/>
    </a>
  );
}

export default LoginHeader;
