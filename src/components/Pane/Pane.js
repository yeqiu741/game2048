import React, { Component } from 'react';
import './Pane.css';

export default class Pane extends Component {
    renderNumberColumnBox = (itemColumn, idColum) => {
      if (itemColumn === 0) { return <div>{null}</div>; } else if (itemColumn === 2048) { alert('恭喜你成功过关！'); }
      return <div key={idColum} className={`animation${itemColumn}`}>{itemColumn}</div>;
    }
    renderBox = number => {
      const rb = (number || []).map((itemRow, idRow) => <div key={idRow} className="rowBox"> {(itemRow || []).map((itemColumn, idColum) => this.renderNumberColumnBox(itemColumn, idColum)) } </div>);
      return rb;
    }
    render() {
      const number = this.props;
      return (
        <div className="gameContainer">
          <div className="gameContainer_box">
            {this.renderBox(number.number.number)}
          </div>
        </div>
      );
    }
}
