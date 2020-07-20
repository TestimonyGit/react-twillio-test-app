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
    return (
      <tr 
        className={styles.row}>
        <td className={styles.type}>
          <span><ContractedSVG/></span>
          <span><ICSVG/></span>
        </td>
        <td className={styles.name}>Lucile Munoz</td>
        <td>oceane@gmail.com</td>
        <td>+1738473847</td>
        <td>4324234</td>
        <td className={styles.status}>
          {SVGS[this.state.status]}<span>{this.state.status}</span>
        </td>
        <td>
          <a className={styles['button'] + ' ' + styles['chat-button']} href='/'>Chat</a>
          <a className={styles['button'] + ' ' + styles['call-button']} href='/'>Call</a>
          <a className={styles['kebab']} href='/'>
            <KebabMenuSVG/>
          </a>
        </td>
      </tr>
    );
  }
}

export default MatchedProvidersRow;
