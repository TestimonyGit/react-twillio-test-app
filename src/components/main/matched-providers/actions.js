import React, {useRef, useEffect} from 'react';
import styles from './actions.module.css';

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

function Actions(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.outsideClick);

  return (
    <ul 
      style={{top: props.top, left: props.left}}
      ref={wrapperRef}
      className={styles.actions}>
      <li><button>Send intro</button></li>
      <li><button onClick={props.showFeedback}>Provide feedback</button></li>
      <li><button>Send reminder</button></li>
      <li><button>Background check</button></li>
    </ul>
  );
}

export default Actions;
