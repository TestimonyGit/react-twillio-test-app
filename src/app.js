import React from 'react';
import './app.css';

// components
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import MatchedProviders from './components/matched-providers/matched-providers';

function App() {
  return (
    <div className="app">
      App
      <Dashboard>
      </Dashboard>
      <Header>
      </Header>
      <MatchedProviders>
      </MatchedProviders>
    </div>
  );
}

export default App;
