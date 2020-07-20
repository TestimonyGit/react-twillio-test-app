import React from 'react';
import './header.css';

import {ReactComponent as BackIconSVG} from '../../assets/svgs/Back 1.svg';
import {ReactComponent as FulfillmentKPIsSVG} from '../../assets/svgs/Fulfillment KPIs.svg';

import LoginHeader from './login-header';
import GoToCaseId from './go-to-case-id';
import IconButton from './icon-button';

function Header() {
  return (
    <div className="header">
      <ul className="header-left-side">
        <li>
          <IconButton
            icon={<BackIconSVG/>}
            bold={true}
            text="BACK"/>
        </li>
        <li>
          <GoToCaseId/>
        </li>
        <li>
          <IconButton
            icon={<FulfillmentKPIsSVG/>}
            text="Fulfillment KPIs"/>
        </li>
      </ul>
      <ul className="header-right-side">
        <LoginHeader/>
      </ul>
    </div>
  );
}

export default Header;
