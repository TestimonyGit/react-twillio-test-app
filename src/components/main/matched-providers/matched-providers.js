import React from 'react';
import styles from './matched-providers.module.css';
import MatchedProvidersRow from './matched-providers-row';
import cloneDeep from 'lodash.clonedeep';

import Actions from './actions';
import SetStatus from './set-status';

import ProvidersJSON from './providers.json';

class MatchedProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      showSetStatus: false,
      popupTop: NaN,
      popupLeft: NaN,
      selectedProvider: NaN,
      providers: cloneDeep(ProvidersJSON)
    }
  }

  showActions = (index) => {
    return (event) => {
      const boundingRect = event.currentTarget.getBoundingClientRect();

      const stateClone = cloneDeep(this.state);

      stateClone.showActions = true;
      stateClone.showSetStatus = false;
      stateClone.popupTop = boundingRect.top;
      stateClone.popupLeft = boundingRect.right;
      stateClone.selectedProvider = index;

      setTimeout(() => {
        this.setState(stateClone)
      }, 0); // Workaround for set state order with hide popups
    }
  }

  showSetStatus = (index) => {
    return (event) => {
      const boundingRect = event.currentTarget.getBoundingClientRect();

      const stateClone = cloneDeep(this.state);

      stateClone.showSetStatus = true;
      stateClone.showActions = false;
      stateClone.popupTop = boundingRect.top;
      stateClone.popupLeft = boundingRect.left;
      stateClone.selectedProvider = index;

      setTimeout(() => {
        this.setState(stateClone);
      }, 0);
    }
  }

  hidePopups = () => {
    const stateClone = cloneDeep(this.state);

    stateClone.showActions = false;
    stateClone.showSetStatus = false;
    stateClone.popupTop = NaN;
    stateClone.popupLeft = NaN;
    stateClone.selectedProvider = NaN;

    this.setState(stateClone)
  }

  selectStatus = (status) => {
    return () => {
      const stateClone = cloneDeep(this.state);

      stateClone.providers[this.state.selectedProvider].status = status;
      stateClone.showActions = false;
      stateClone.showSetStatus = false;
      stateClone.popupTop = NaN;
      stateClone.popupLeft = NaN;
      stateClone.selectedProvider = NaN;

      this.setState(stateClone);
    }
  }

  render() {
    const rows = this.state.providers.map((provider, index)=>
      <MatchedProvidersRow
        showActions={this.showActions(index)}
        showSetStatus={this.showSetStatus(index)}
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
          selectStatus={this.selectStatus}
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
