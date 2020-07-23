import React from 'react';
import styles from './star.module.css';

import {ReactComponent as StarGreySVG} from '../../../assets/svgs/Star grey.svg';
import {ReactComponent as StarYellowSVG} from '../../../assets/svgs/Star yellow.svg';

function Star(props) {
  const display = props.active ? <StarYellowSVG/> : <StarGreySVG/>;
  return (
    <button 
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}
      onMouseLeave={props.onMouseLeave}
      className={styles.star}>
      {display}
    </button>
  );
}

export default Star;
