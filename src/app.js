import React from 'react';
import styles from './app.module.css';

import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Main from './components/main/main';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarOpen: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <Sidebar
          sidebarOpen={this.state.sidebarOpen}/>
        <Header
          sidebarOpen={this.state.sidebarOpen}
          toggleSidebar={this.toggleSidebar}/>
        <Main
          sidebarOpen={this.state.sidebarOpen}/>
      </div>
    );
  }
}

export default App;
