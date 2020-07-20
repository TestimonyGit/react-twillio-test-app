import React from 'react';
import styles from './sidebar.module.css';
import SidebarIcon from './sidebar-icon.js';
import {ReactComponent as TrueCareSVG} from '../../assets/svgs/TrueCare24_logo.svg';
import {ReactComponent as DashboardSVG} from '../../assets/svgs/Dashboard.svg';
import {ReactComponent as FAQSVG} from '../../assets/svgs/FAQ.svg';
import {ReactComponent as SignOutSVG} from '../../assets/svgs/Sign out.svg';

function Sidebar() {
  return (
    <ul className={styles.sidebar}>
      <li>
        <SidebarIcon
          icon={<TrueCareSVG/>}/>
      </li>
      <li>
      <SidebarIcon
        icon={<DashboardSVG/>}
        text="Dashboard"/>
      </li>
      <li>
      <SidebarIcon 
        icon={<FAQSVG/>}
        text="FAQ"/>
      </li>
      <li>
      <SidebarIcon 
        icon={<SignOutSVG/>}
        text="Sign out"/>
      </li>
    </ul>
  );
}

export default Sidebar;
