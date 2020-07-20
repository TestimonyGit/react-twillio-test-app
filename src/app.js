import React from 'react';
import './app.css';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
