import React from 'react';
import './sidebar.css';
import SidebarIcon from './sidebar-icon.js';
import {ReactComponent as TrueCareSVG} from '../../assets/svgs/TrueCare24_logo.svg';
import {ReactComponent as DashboardSVG} from '../../assets/svgs/Dashboard.svg';
import {ReactComponent as FAQSVG} from '../../assets/svgs/FAQ.svg';
import {ReactComponent as SignOutSVG} from '../../assets/svgs/Sign out.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarIcon
        icon={<TrueCareSVG/>}/>
      <SidebarIcon
        icon={<DashboardSVG/>}
        text="Dashboard"/>
      <SidebarIcon 
        icon={<FAQSVG/>}
        text="FAQ"/>
      <SidebarIcon 
        icon={<SignOutSVG/>}
        text="Sign out"/>
    </div>
  );
}

export default Sidebar;
