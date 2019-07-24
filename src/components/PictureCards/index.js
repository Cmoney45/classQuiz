import React, { Component } from 'react';
import "./style.css";

export default class PictureCard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
  return (
    <div className="card bg-dark" onClick={() => this.props.removeFriend(this.props.id)}>
      <img className="card-img" alt={this.props.name} src={this.props.image} />
        <div className="protitle">
          {this.props.name}
        </div>
    </div>
  );
  }
}