import React from 'react';
import './login-header.css';
import {ReactComponent as Dropdown} from '../../assets/svgs/Dropdown.svg';

function LoginHeader() {
  return (
    <a 
      className="login-header"
      href="/">
      <span>leo@truecare24.com</span>
      <Dropdown/>
    </a>
  );
}

export default LoginHeader;
