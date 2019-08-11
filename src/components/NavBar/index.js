import React, { Component } from 'react';
import Store from "../../store";
import {
  Typography,
  AppBar,
  Toolbar
} from '@material-ui/core';

class Navbar extends Component {

  render() {
    const { store } = this.props

    return (
      <AppBar
        position='fixed'
      >
        <Toolbar>
          <Typography 
          variant="h1" 
          color="inherit" />{`D&D Class Quiz`}
          {store.get('gameRunning')
            ? <h4 className="ml-auto">Questions Answered: {store.get('questionsAnswered')} / {store.get('totalQuestions')} </h4>
            : <div className="ml-auto" />
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default Store.withStore(Navbar);