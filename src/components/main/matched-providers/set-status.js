import React from 'react';
import styles from './set-status.module.css';

import {ReactComponent as TalkedToTheClientSVG} from '../../../assets/svgs/Talked to the client.svg';
import {ReactComponent as AssessmentScheduledSVG} from '../../../assets/svgs/Assessment scheduled.svg';
import {ReactComponent as ContractSignedSVG} from '../../../assets/svgs/Contract Signed.svg';
import {ReactComponent as CancelTheClientSVG} from '../../../assets/svgs/Cancel the client.svg';
import {ReactComponent as Contacting0SVG} from '../../../assets/svgs/Contacting 0.svg';

function SetStatus() {
  return (
    <ul 
      className={styles['set-status']}>
      <li><a href='/'><Contacting0SVG/>Contacting</a></li>
      <li><a href='/'><TalkedToTheClientSVG/>Talked to the client</a></li>
      <li><a href='/'><AssessmentScheduledSVG/>Assessment scheduled</a></li>
      <li><a href='/'><ContractSignedSVG/>Contract Signed</a></li>
      <li><a href='/'><CancelTheClientSVG/>Cancel the client</a></li>
    </ul>
  );
}

export default SetStatus;
