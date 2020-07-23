import React, {useRef, useEffect} from 'react';
import styles from './set-status.module.css';

import {ReactComponent as TalkedToTheClientSVG} from '../../../assets/svgs/Talked to the client.svg';
import {ReactComponent as AssessmentScheduledSVG} from '../../../assets/svgs/Assessment scheduled.svg';
import {ReactComponent as ContractSignedSVG} from '../../../assets/svgs/Contract Signed.svg';
import {ReactComponent as CancelTheClientSVG} from '../../../assets/svgs/Cancel the client.svg';
import {ReactComponent as Contacting0SVG} from '../../../assets/svgs/Contacting 0.svg';

function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              callback(); 
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [callback, ref]);
}

function SetStatus(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.outsideClick);

  return (
    <ul 
      style={{top: props.top, left: props.left}}
      ref={wrapperRef}
      className={styles['set-status']}>
      <li><button onClick={props.selectStatus('Contacting')}><Contacting0SVG/>Contacting</button></li>
      <li><button onClick={props.selectStatus('Talked to the client')}><TalkedToTheClientSVG/>Talked to the client</button></li>
      <li><button onClick={props.selectStatus('Assessment scheduled')}><AssessmentScheduledSVG/>Assessment scheduled</button></li>
      <li><button onClick={props.selectStatus('Contract Signed')}><ContractSignedSVG/>Contract Signed</button></li>
      <li><button onClick={props.selectStatus('Cancel the client')}><CancelTheClientSVG/>Cancel the client</button></li>
    </ul>
  );
}

export default SetStatus;
