import React, { Component } from 'react';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      

    };
  };

  render () {
    return (
    <div className="navbar fixed-top navbar-light bg-dark text-light">
      <h2 className="mr-auto">{`D&D Class Quiz`}</h2>
      <h4 className="m-auto">Click an image to start!</h4>
      <h4 className="ml-auto">Score: {this.props.score} | Top Score: {this.props.highScore} </h4>
    </div>
    );
  }
}
