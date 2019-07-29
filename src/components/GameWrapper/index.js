import React, { Component } from 'react';
import "./style.css";

export default class GameWrapper extends Component {

  render() {

    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
