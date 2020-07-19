import React from 'react';
import './dashboard.css';
import DashboardIcon from './dashboard-icon.js';
import {ReactComponent as TrueCareSVG} from '../../assets/svgs/TrueCare24_logo.svg';
import {ReactComponent as DashboardSVG} from '../../assets/svgs/Dashboard.svg';
import {ReactComponent as FAQSVG} from '../../assets/svgs/FAQ.svg';
import {ReactComponent as SignOutSVG} from '../../assets/svgs/Sign out.svg';

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardIcon
        icon={<TrueCareSVG/>}/>
      <DashboardIcon
        icon={<DashboardSVG/>}
        text="Dashboard"/>
      <DashboardIcon 
        icon={<FAQSVG/>}
        text="FAQ"/>
      <DashboardIcon 
        icon={<SignOutSVG/>}
        text="Sign out"/>
    </div>
  );
}

export default Dashboard;
