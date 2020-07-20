import React from 'react';
import styles from './app.module.css';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
