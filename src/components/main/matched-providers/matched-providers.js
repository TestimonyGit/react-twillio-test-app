import React from 'react';
import styles from './matched-providers.module.css';
import MatchedProvidersRow from './matched-providers-row';

import Actions from './actions';
import SetStatus from './set-status';

import ProvidersJSON from './providers.json';

class MatchedProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      showSetStatus: false,
      popupTop: 0,
      popupLeft: 0
    }
  }

  showActions = (event) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();

    this.setState({
      ...this.state, 
      showActions: true,
      popupTop: boundingRect.top,
      popupLeft: boundingRect.right
    })
  }

  showSetStatus = (event) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();

    this.setState({
      ...this.state, 
      showSetStatus: true,
      popupTop: boundingRect.top,
      popupLeft: boundingRect.left
    })
  }

  hidePopups = () => {
    this.setState({
      showActions: false,
      showSetStatus: false
    })
  }

  render() {
    const rows = ProvidersJSON.map((provider, index)=>
      <MatchedProvidersRow
        showActions={this.showActions}
        showSetStatus={this.showSetStatus}
        provider={provider}
        key={index.toString()}/>
    );

    let actionsDisplay = this.state.showActions 
      ? <Actions
          top={this.state.popupTop}
          left={this.state.popupLeft}
          outsideClick={this.hidePopups}/> 
      : <></>;

    let setStatusDisplay = this.state.showSetStatus 
      ? <SetStatus 
          top={this.state.popupTop}
          left={this.state.popupLeft}
          outsideClick={this.hidePopups}/>
      : <></>;

    return (
      <div className={styles['matched-providers']}>
        <h4>Matched providers</h4>
        <table>
          <thead>
            <tr><td>Type</td><td>Name</td><td>Email</td><td>Phone</td><td>ID</td><td>Status</td><td></td></tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        {actionsDisplay}
        {setStatusDisplay}
      </div>
    );
  }
}

export default MatchedProviders;
