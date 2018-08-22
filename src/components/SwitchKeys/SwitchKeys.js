import React from 'react';
import './SwitchKeys.css';

export default class SwitchKeys extends React.Component {
  handleUpKyesClick = () => {
    const { actions } = this.props;
    this.props.up(actions);
  }
  handleDownKyesClick = () => {
    const { actions } = this.props;
    this.props.down(actions);
  }
  handleLeftKyesClick = () => {
    const { actions } = this.props;
    this.props.left(actions);
  }
  handleRightKyesClick = () => {
    const { actions } = this.props;
    this.props.right(actions);
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

