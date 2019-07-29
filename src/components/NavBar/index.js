import React, { Component } from 'react';
import Store from "../../store";

class Navbar extends Component {

  render() {
    const { store } = this.props

    return (
      <div className="navbar fixed-top navbar-light bg-dark text-light">
        <h2 className="mr-auto">{`D&D Class Quiz`}</h2>
        {store.get('gameRunning')
          ? <h4 className="ml-auto">Questions Answered: {store.get('questionsAnswered')} / {store.get('totalQuestions')} </h4>
          : <div className="ml-auto" />
        }
      </div>
    );
  }
}

export default Store.withStore(Navbar);