import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

class PictureCard extends Component {

  render() {
    let { id } = this.props.store.state;

  return (
    <div className="card bg-dark" onClick={() => this.props.removeFriend(id)}>
      <img className="card-img" alt={this.props.name} src={this.props.image} />
        <div className="protitle">
          {this.props.name}
        </div>
    </div>
  );
  }
}

export default Store.withStore(PictureCard);