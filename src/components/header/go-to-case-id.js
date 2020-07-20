import React from 'react';
import './go-to-case-id.css';
import {ReactComponent as GoSVG} from '../../assets/svgs/Go.svg';

function GoToCaseId() {
  return (
    <div 
      className="go-to-case-id">
      <input 
        placeholder="Go to case ID#"/>
      <a href="/">
        <GoSVG/>
      </a>
    </div>
  );
}

export default GoToCaseId;
