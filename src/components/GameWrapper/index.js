import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

export default class GameWrapper extends Component {

  render() {

    return (
      <div className="wrapper mt-3">
        {this.props.children}
      </div>
    );
  }
}
