import React from 'react';
import styles from './matched-providers-row.module.css';

import {ReactComponent as ContractedSVG} from '../../../assets/svgs/Contracted.svg';
import {ReactComponent as NonContractedSVG} from '../../../assets/svgs/Non Contracted.svg';
import {ReactComponent as ICSVG} from '../../../assets/svgs/IC.svg';
import {ReactComponent as HomeCareAgencySVG} from '../../../assets/svgs/Home care agency.svg';
import {ReactComponent as TalkedToTheClientSVG} from '../../../assets/svgs/Talked to the client.svg';
import {ReactComponent as AssessmentScheduledSVG} from '../../../assets/svgs/Assessment scheduled.svg';
import {ReactComponent as ContractSignedSVG} from '../../../assets/svgs/Contract Signed.svg';
import {ReactComponent as CancelTheClientSVG} from '../../../assets/svgs/Cancel the client.svg';
import {ReactComponent as Contacting0SVG} from '../../../assets/svgs/Contacting 0.svg';

import {ReactComponent as KebabMenuSVG} from '../../../assets/svgs/kebab menu.svg';
import {ReactComponent as KebabMenuHoverSVG} from '../../../assets/svgs/kebab menu hover.svg';

const SVGS = {
  'Contacting' : <Contacting0SVG/>,
  'Cancel the client' : <CancelTheClientSVG/>,
  'Contract Signed' : <ContractSignedSVG/>,
  'Assessment scheduled' : <AssessmentScheduledSVG/>,
  'Talked to the client' : <TalkedToTheClientSVG/>,
}

class MatchedProvidersRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status ? props.status : 'Contacting',
    }
  }

  render() {
    const contractStatus = this.props.provider.contracted ? <ContractedSVG/> : <NonContractedSVG/>;
    const type = this.props.provider.type === "IC" ? <ICSVG/> : <HomeCareAgencySVG/>;
    return (
      <tr 
        className={styles.row}>
        <td className={styles.type}>
          <span>{contractStatus}</span>
          <span>{type}</span>
        </td>
        <td className={styles.name}>{this.props.provider.name}</td>
        <td>{this.props.provider.email}</td>
        <td>{this.props.provider.phone}</td>
        <td>{this.props.provider.id}</td>
        <td 
          className={styles.status}>
          <button onClick={this.props.showSetStatus}>
            {SVGS[this.props.provider.status]}
            <span>{this.props.provider.status}</span>
          </button>
        </td>
        <td>
          <button className={styles['button'] + ' ' + styles['chat-button']} href='/'>Chat</button>
          <button className={styles['button'] + ' ' + styles['call-button']} href='/'>Call</button>
          <button 
            onClick={(ev) => this.props.showActions(ev)}
            className={styles['kebab']}>
            <KebabMenuSVG/>
          </button>
        </td>
      </tr>
    );
  }
}

export default MatchedProvidersRow;
