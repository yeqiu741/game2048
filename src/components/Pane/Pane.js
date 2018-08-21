import React, { Component } from 'react';
import './Pane.css';
/* eslint-disable */
export default class Pane extends Component {
    judgeNumber = (number,key1,key2) => {
      if (number === 0) { return <div>{null}</div>; } else if (number === 2048) { alert('恭喜你成功过关！'); }
      return <div key={[key1,key2]} className={`animation${number}`}>{number}</div>;
    }
    renderBox = number => {
      const rb = (number || []).map((item,key1) => (item || []).map((itemColumn,key2) => this.judgeNumber(itemColumn,key1,key2)));
      return rb;
    }
    render() {
      const number = this.props;
      return (
        <div className="gameContainer">
          {this.renderBox(number.number.number)}
        </div>
      );
    }
}
