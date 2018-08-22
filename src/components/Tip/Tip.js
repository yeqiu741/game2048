import React, { Component } from 'react';
import './Tip.css';

let timer;
export default class Tip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    };
  }
  componentWillReceiveProps(newProps) {
    setTimeout(timer);
    console.log(newProps);
    if (newProps.score.addScoreAnimation !== 0) {
      this.setState({
        isDisplay: true
      });
    }
    timer = setTimeout(() => {
      this.setState({
        isDisplay: false
      });
    }, 1700);
  }
    handleRestartClick = () => {
      this.props.handleTipRestartClick();
    }
    handlestate = () => {
      console.log(this.state.isDisplay);
      if (this.state.isDisplay === false) {
        return 'undisplay';
      } return 'addScoreAnimation';
    }
    render() {
      const { score } = this.props;
      const addScore = score.addScoreAnimation;
      console.log(addScore);
      return (
        <div className="tip">
          <div className="hint">
            <div className="gameName">2048</div>
            <div className="pcRule">Please press W A S D to control site of number on pc<br />Or touch move on phone</div>
          </div>
          <div className="scoreBoard">
            <div>
                得分<br />{score.lastScore}<br /><span className={this.handlestate()}>+{addScore}</span>
            </div>
            <div>
                历史最高分<br />{score.bestScore}
            </div>
            <button onClick={this.handleRestartClick}>重新开始</button>
          </div>
        </div>
      );
    }
}
