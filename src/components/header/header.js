import React from 'react';
import styles from './header.module.css';

import {ReactComponent as BackIconSVG} from '../../assets/svgs/Back 1.svg';
import {ReactComponent as FulfillmentKPIsSVG} from '../../assets/svgs/Fulfillment KPIs.svg';
import {ReactComponent as HamburgerSVG} from '../../assets/svgs/Hamburger.svg';

import LoginHeader from './login-header';
import GoToCaseId from './go-to-case-id';
import IconButton from './icon-button';

function Header(props) {
  const headerClasses = props.sidebarOpen ? styles.header + ' ' + styles['sidebar-open'] : styles.header ;
  return (
    <div className={headerClasses}>
      <ul className={styles['left-side']}>
        <li>
          <IconButton
            icon={<BackIconSVG/>}
            bold={true}
            text="BACK"/>
        </li>
        <li>
          <IconButton
            icon={<HamburgerSVG/>}
            onclick={props.toggleSidebar}
            mobileScreenOnly={true}/>
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
      <ul className={styles['right-side']}>
        <li>
          <LoginHeader/>
        </li>
      </ul>
    </div>
  );
}

export default Header;
