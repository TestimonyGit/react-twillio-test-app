import React from 'react';
import styles from './matched-providers.module.css';
import MatchedProvidersRow from './matched-providers-row';
import cloneDeep from 'lodash.clonedeep';

import Actions from './actions';
import SetStatus from './set-status';
import Feedback from './feedback';

import ProvidersJSON from './providers.json';

class MatchedProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      showSetStatus: false,
      showFeedback: false,
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
      }, 0); // Workaround for setState order with hidePopups
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

  showFeedback = () => {
    const stateClone = cloneDeep(this.state);

    stateClone.showFeedback = true;
    stateClone.showActions = false;
    stateClone.showSetStatus = false;

    setTimeout(() => {
      this.setState(stateClone);
    }, 0);
  }

  hidePopups = () => {
    const stateClone = cloneDeep(this.state);

    stateClone.showActions = false;
    stateClone.showSetStatus = false;
    stateClone.showFeedback = false;
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

    const actionsDisplay = this.state.showActions 
      ? <Actions
          top={this.state.popupTop}
          left={this.state.popupLeft}
          showFeedback={this.showFeedback}
          outsideClick={this.hidePopups}/> 
      : <></>;

    const setStatusDisplay = this.state.showSetStatus 
    ? <SetStatus 
        top={this.state.popupTop}
        left={this.state.popupLeft}
        selectStatus={this.selectStatus}
        outsideClick={this.hidePopups}/>
    : <></>;

    const feedbackDisplay = this.state.showFeedback 
      ? <Feedback 
          outsideClick={this.hidePopups}/>
      : <></>;

    return (
      <div className={styles['matched-providers']}>
        <h4>Matched providers</h4>
        <div className={styles['table-wrapper']}>
          <table>
            <thead>
              <tr><td>Type</td><td>Name</td><td>Email</td><td>Phone</td><td>ID</td><td>Status</td><td></td></tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        {actionsDisplay}
        {setStatusDisplay}
        {feedbackDisplay}
      </div>
    );
  }
}

export default MatchedProviders;
