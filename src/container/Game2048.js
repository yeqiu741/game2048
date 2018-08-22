import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pane from '../components/Pane/Pane';
import Tip from '../components/Tip/Tip';
import * as Actioncreators from '../actions/restart';
import SwitchKeys from '../components/SwitchKeys/SwitchKeys';


class Game2048 extends Component {
  constructor(props) {
    super(props);
    this.initialization();
  }
  // 键盘字符 W S A D 的 ASCII 码分别对应为 87 83 65 68；
  /* eslint-disable no-param-reassign */
  componentDidMount() {
    document.addEventListener('keydown', e => {
      const { actions } = this.props;
      switch (e.keyCode) {
        case 65:
        case 37:
          this.left(actions);
          break;
        case 87:
        case 38:
          this.up(actions);
          break;
        case 68:
        case 39:
          this.right(actions);
          break;
        case 83:
        case 40:
          this.down(actions);
          break;
        default:
          console.log('请按W A S D,或者上下左右健，没事别他妈瞎按！');
      }
    });
  }
  left = actions => {
    actions.addLastScore(0);
    actions.moveLeft(this.handlePressLeftKey());
    this.JudgeScore();
    this.randomNumberInsertion();
  }
  right = actions => {
    actions.addLastScore(0);
    actions.moveRight(this.handlePressRightKey());
    this.JudgeScore();
    this.randomNumberInsertion();
  }
  up = actions => {
    actions.addLastScore(0);
    actions.moveUp(this.handlePressUpKey());
    this.JudgeScore();
    this.randomNumberInsertion();
  }
  down = actions => {
    actions.addLastScore(0);
    actions.moveDown(this.handlePressDownKey());
    this.JudgeScore();
    this.randomNumberInsertion();
  }
  upTools = numberArray => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (numberArray[i][j] === 0 && numberArray[i + 1][j] !== 0) {
          numberArray[i][j] = numberArray[i + 1][j];
          numberArray[i + 1][j] = 0;
        }
      }
    }
    return numberArray;
  }
  handlePressUpKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      this.upTools(numberArray);
      m--;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (numberArray[i][j] !== 0 && numberArray[i][j] === numberArray[i + 1][j]) {
          numberArray[i][j] *= 2;
          actions.addLastScore(numberArray[i][j]);
          numberArray[i + 1][j] = 0;
        }
      }
    }
    this.upTools(numberArray);
    return numberArray;
  }
  downTools = numberArray => {
    for (let i = 3; i > 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (numberArray[i][j] === 0 && numberArray[i - 1][j] !== 0) {
          numberArray[i][j] = numberArray[i - 1][j];
          numberArray[i - 1][j] = 0;
        }
      }
    }
    return numberArray;
  }
  handlePressDownKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      this.downTools(numberArray);
      m--;
    }
    for (let i = 3; i > 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (numberArray[i][j] !== 0 && numberArray[i][j] === numberArray[i - 1][j]) {
          numberArray[i][j] *= 2;
          actions.addLastScore(numberArray[i][j]);
          numberArray[i - 1][j] = 0;
        }
      }
    }
    this.downTools(numberArray);
    return numberArray;
  }
  leftTools = numberArray => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (numberArray[i][j] === 0 && numberArray[i][j + 1] !== 0) {
          numberArray[i][j] = numberArray[i][j + 1];
          numberArray[i][j + 1] = 0;
        }
      }
    }
    return numberArray;
  }
  handlePressLeftKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      this.leftTools(numberArray);
      m--;
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (numberArray[i][j] !== 0 && numberArray[i][j] === numberArray[i][j + 1]) {
          numberArray[i][j] *= 2;
          actions.addLastScore(numberArray[i][j]);
          numberArray[i][j + 1] = 0;
        }
      }
    }
    this.leftTools(numberArray);
    return numberArray;
  }
  rightTools = numberArray => {
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j > 0; j--) {
        if (numberArray[i][j] === 0 && numberArray[i][j - 1] !== 0) {
          numberArray[i][j] = numberArray[i][j - 1];
          numberArray[i][j - 1] = 0;
        }
      }
    }
    return numberArray;
  }
  handlePressRightKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      this.rightTools(numberArray);
      m--;
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j > 0; j--) {
        if (numberArray[i][j] !== 0 && numberArray[i][j] === numberArray[i][j - 1]) {
          numberArray[i][j] *= 2;
          actions.addLastScore(numberArray[i][j]);
          numberArray[i][j - 1] = 0;
        }
      }
    }
    this.rightTools(numberArray);
    return numberArray;
  }
    initialization = () => {
      const { actions } = this.props;
      let X1 = this.produceRandSiteNumber();
      const Y1 = this.produceRandSiteNumber();
      const X2 = this.produceRandSiteNumber();
      const Y2 = this.produceRandSiteNumber();
      if (X1 === X2 && Y1 === Y2) {
        X1 %= 2;
        X1 += 1;
        return X1;
      }
      const data = {
        X1,
        X2,
        Y1,
        Y2,
        number1: this.produceRandNumber(),
        number2: this.produceRandNumber()
      };
      actions.restart(data);
      actions.initLastScore(0);
      return null;
    }
    // 生成随机数【2，4】，Math.ceil
    produceRandNumber = () => {
      let rand = Math.ceil(Math.random() * 4);
      if (rand % 2 === 0) { return rand; } rand += 1; return rand;
    }
    // 生成随机位置数：【0，1，2，3】
    produceRandSiteNumber = () => {
      const rand = Math.floor(Math.random() * 4);
      return rand;
    }
    JudgeScore = () => {
      const { score, actions } = this.props;
      const newBestScore = score.lastScore > score.bestScore ? score.lastScore : score.bestScore;
      actions.addBestScore(newBestScore);
    }
    randomNumberInsertion = () => {
      const { actions } = this.props;
      let count = 0;
      let bestNumber = 0;
      const siteArray = [];
      const array = this.props;
      const numberArray = array.restart.number;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (numberArray[i][j] === 0) {
            siteArray[count] = [i, j];
            count++;
          }
          if (numberArray[i][j] > bestNumber) {
            bestNumber = numberArray[i][j];
          }
        }
      }
      if (count === 0 && bestNumber !== 2048) {
        alert('Game over!Please press restart to have fun again!');
      } else {
        const number = siteArray.length;
        const oneRandNumber = Math.floor(Math.random() * number);
        const data = siteArray[oneRandNumber];
        actions.oneRandNumber(data);
      }
    };
    render() {
      const {
        restart, score, icon, actions
      } = this.props;
      return (
        <div className="game2048">
          <Tip
            handleTipRestartClick={this.initialization}
            score={score}
          />
          <Pane number={restart} />
          <SwitchKeys
            up={this.up}
            left={this.left}
            right={this.right}
            down={this.down}
            icon={icon}
            actions={actions}
          />
        </div>
      );
    }
}
const mapStateToProps = ({ restart, score, icon }) => ({ restart, score, icon });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actioncreators, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Game2048);
