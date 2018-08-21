import React from 'react';
import './SwitchKeys.css';

export default class SwitchKeys extends React.Component {
  handleUpKyesClick = () => {
    this.props.up();
  }
  handleDownKyesClick = () => {
    this.props.down();
  }
  handleLeftKyesClick = () => {
    this.props.left();
  }
  handleRightKyesClick = () => {
    this.props.right();
  }
  render() {
    const { icon } = this.props;
    return (
      <div className="switchKeys">
        <button onClick={this.handleUpKyesClick} className="caret-up"><img src={icon.icon.icon_up} alt="图片加载失败！" /></button><br />
        <button onClick={this.handleLeftKyesClick} className="caret-left"><img src={icon.icon.icon_left} alt="图片加载失败！" /></button>
        <button onClick={this.handleRightKyesClick} className="caret-right"><img src={icon.icon.icon_right} alt="图片加载失败！" /></button><br />
        <button onClick={this.handleDownKyesClick} className="caret-down"><img src={icon.icon.icon_down} alt="图片加载失败！" /></button>
      </div>
    );
  }
}

