import React from 'react';
import styles from './go-to-case-id.module.css';
import {ReactComponent as GoSVG} from '../../assets/svgs/Go.svg';

function GoToCaseId() {
  return (
    <div 
      className={styles['go-to-case-id']}>
      <input 
        placeholder="Go to case ID#"/>
      <button>
        <GoSVG/>
      </button>
    </div>
  );
}

export default GoToCaseId;
