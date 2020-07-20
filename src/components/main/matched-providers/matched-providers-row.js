import React from 'react';
import styles from './matched-providers-rows.module.css';

import {ReactComponent as ContractedSVG} from '../../../assets/svgs/Contracted.svg';
import {ReactComponent as NonContractedSVG} from '../../../assets/svgs/Non Contracted.svg';
import {ReactComponent as ICSVG} from '../../../assets/svgs/IC.svg';
import {ReactComponent as HomeCareAgencySVG} from '../../../assets/svgs/Home care agency.svg';
import {ReactComponent as TalkedToTheClientSVG} from '../../../assets/svgs/Talked to the client.svg';
import {ReactComponent as AssessmentScheduledSVG} from '../../../assets/svgs/Assessment scheduled.svg';
import {ReactComponent as ContractSignedSVG} from '../../../assets/svgs/Contract Signed.svg';
import {ReactComponent as CancelTheClientSVG} from '../../../assets/svgs/Cancel the client.svg';
import {ReactComponent as Contacting0SVG} from '../../../assets/svgs/Contacting 0.svg';

function MatchedProvidersRow() {
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
      <td>contacting</td>
      <td></td>
    </tr>
  );
}

export default MatchedProvidersRow;
