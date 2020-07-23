import React from 'react';
import styles from './feedback.module.css';

import Star from './star';

import {ReactComponent as CloseSVG} from '../../../assets/svgs/Close.svg';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: -1,
      hoverRating: -1,
      hoverMode: false
    }
  }

  removeHover = (index) => {
    return () => {
      this.setState({
        ...this.state,
        hoverRating: -1,
        hoverMode: false
      })
    }
  }

  ratingHover = (index) => {
    return () => {
      this.setState({
        ...this.state,
        hoverRating: index,
        hoverMode: true
      })
    }
  }

  ratingChoose = (index) => {
    return () => {
      this.setState({
        ...this.state,
        selectedRating: index
      })
    }
  }

  render() {
    let starsArr = [];
    let displayStar = this.state.hoverMode ? this.state.hoverRating : this.state.selectedRating;

    for (let i = 0; i < 5; i++) {
      if (i <= displayStar) starsArr.push(true);
                      else starsArr.push(false);
    }

    const starsList = starsArr.map((starEnabled, index) => 
      <Star 
        onMouseEnter={this.ratingHover(index)}
        onMouseLeave={this.removeHover(index)}
        onClick={this.ratingChoose(index)}
        active={starEnabled}
        key={index.toString()}/>
    );

    return (
      <div>
        <div onClick={this.props.outsideClick} className={styles['blackout']}></div>
        <div className={styles['popup']}>
          <button 
            onClick={this.props.outsideClick} 
            className={styles['exit']}>
            <CloseSVG/>
          </button>
          <h4 className={styles['popup-info']}>Set the rating and provide the feedback note:</h4>
          <div className={styles.stars}>{starsList}</div>
          <textarea 
            placeholder="Type here"
            className={styles.textarea}></textarea>
          <button 
            onClick={this.props.outsideClick}
            className={styles['save-button']}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
