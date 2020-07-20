import React from 'react';
import styles from './main.module.css';

import MatchedProviders from './matched-providers/matched-providers';

function Main() {
  return (
    <div className={styles.main}>
      <MatchedProviders/>
    </div>
  );
}

export default Main;
