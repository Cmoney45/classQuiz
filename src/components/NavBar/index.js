import React, { Component } from 'react';
import Store from "../../store";

class Navbar extends Component {

  render () {
    let store = this.props.store;

    return (
    <div className="navbar fixed-top navbar-light bg-dark text-light">
      <h2 className="mr-auto">{`D&D Class Quiz`}</h2>
      <h4 className="m-auto">Click an image to start!</h4>
      <h4 className="ml-auto">Questions Answered: {store.state.score} | Top Score: {store.state.highScore} </h4>
    </div>
    );
  }
}

export default Store.withStore(Navbar);