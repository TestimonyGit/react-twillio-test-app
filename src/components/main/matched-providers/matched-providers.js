import React from 'react';
import './matched-providers.css';

import {ReactComponent as ICSVG} from '../../../assets/svgs/IC.svg';
import {ReactComponent as ContractedSVG} from '../../../assets/svgs/Contracted.svg';
import {ReactComponent as NonContractedSVG} from '../../../assets/svgs/Non Contracted.svg';
import {ReactComponent as HomeCareAgencySVG} from '../../../assets/svgs/Home care agency.svg';
import {ReactComponent as Contacting0SVG} from '../../../assets/svgs/Contacting 0.svg';
import {ReactComponent as TalkedToTheClientSVG} from '../../../assets/svgs/Talked to the client.svg';
import {ReactComponent as AssessmentScheduledSVG} from '../../../assets/svgs/Assessment scheduled.svg';
import {ReactComponent as ContractSignedSVG} from '../../../assets/svgs/Contract Signed.svg';
import {ReactComponent as CancelTheClientSVG} from '../../../assets/svgs/Cancel the client.svg';

function MatchedProviders() {
  const numbers = [1, 2, 3, 4, 5];
  const rows = numbers.map((number) =>
    <tr>
      <td className='matched-providers-type'>
        <span><ContractedSVG/></span>
        <span><ICSVG/></span>
      </td>
      <td className='matched-providers-name'>Lucile Munoz</td>
      <td>oceane@gmail.com</td>
      <td>+1738473847</td>
      <td>4324234</td>
      <td>contacting</td>
      <td></td>
    </tr>
  );

  return (
    <div className="matched-providers">
      <h4>Matched providers</h4>
      <table>
        <thead>
          <tr><td>Type</td><td>Name</td><td>Email</td><td>Phone</td><td>ID</td><td>Status</td><td></td></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default MatchedProviders;
