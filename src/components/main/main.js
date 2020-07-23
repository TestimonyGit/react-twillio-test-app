import React from 'react';
import styles from './main.module.css';

import MatchedProviders from './matched-providers/matched-providers';

function Main(props) {
  const mainClasses = props.sidebarOpen ? styles.main + ' ' + styles['sidebar-open'] : styles.main;

  return (
    <div className={mainClasses}>
      <MatchedProviders/>
    </div>
  );
}

export default Main;
