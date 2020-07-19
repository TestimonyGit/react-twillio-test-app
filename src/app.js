import React from 'react';
import './app.css';

// components
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import MatchedProviders from './components/matched-providers/matched-providers';

function App() {
  return (
    <div className="app">
      <Sidebar>
      </Sidebar>
      <Header>
      </Header>
      <MatchedProviders>
      </MatchedProviders>
    </div>
  );
}

export default App;
