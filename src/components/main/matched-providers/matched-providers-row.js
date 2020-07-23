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

const contactTheClient = (clientNumber) => {
  return () => {
    console.log('sending request to /call...');
    fetch(window.location.href + 'call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({clientNumber})
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
}

function MatchedProvidersRow(props) {
  const contractStatus = props.provider.contracted ? <ContractedSVG/> : <NonContractedSVG/>;
  const type = props.provider.type === "IC" ? <ICSVG/> : <HomeCareAgencySVG/>;
  const trClasses = props.provider.status === 'Cancel the client' ? styles.row + ' ' + styles['row-cancel'] : styles.row;
  const stringNumber = props.provider.phone.toString();
  const formattedPhoneNumber = 
    `+${stringNumber[0]} (${stringNumber.slice(1, 4)})  ${stringNumber.slice(4, 7)}-${stringNumber.slice(4, 7)}`;

  return (
    <tr 
      className={trClasses}>
      <td className={styles.type}>
        <span>{contractStatus}</span>
        <span>{type}</span>
      </td>
      <td className={styles.name}>{props.provider.name}</td>
      <td>{props.provider.email}</td>
      <td>{formattedPhoneNumber}</td>
      <td>{props.provider.id}</td>
      <td 
        className={styles.status}>
        <button onClick={props.showSetStatus}>
          {SVGS[props.provider.status]}
          <span>{props.provider.status}</span>
        </button>
      </td>
      <td>
        <button 
          className={styles['button'] + ' ' + styles['chat-button']}>
          Chat
        </button>
        <button 
          className={styles['button'] + ' ' + styles['call-button']}
          onClick={contactTheClient(props.provider.phone)}>
          Call
        </button>
        <button 
          onClick={(ev) => props.showActions(ev)}
          className={styles['kebab']}>
          <KebabMenuSVG/>
        </button>
      </td>
    </tr>
  );
}

export default MatchedProvidersRow;
