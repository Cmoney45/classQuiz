import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";
import statsBank from "../../questionBanks/abilityScores.json";
import alignmentBank from "../../questionBanks/playerAlignment.json";
import classBank from "../../questionBanks/playerClass.json";
import levelBank from "../../questionBanks/playerLevel.json";
import raceBank from "../../questionBanks/playerRace.json";
import {
    Button,
  } from '@material-ui/core';

class Jumbotron extends Component {
    startDaGame = (store) => {
        let fullBank = statsBank.concat(
            raceBank,
            classBank,
            alignmentBank,
            levelBank
        );
        store.set('currentQuestionBank')(fullBank);
        store.set('totalQuestions')(fullBank.length);
        store.set('gameRunning')(true);
    }
    render() {

        const { store } = this.props

        return (store.get('gameRunning')
            ? null
            : 
            store.get('gameCompleted')
            ? null
            :
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">{`D&D Class Quiz`}</h1>
                    <p className="lead text-center">
                        Click Start! to find out what Race,
                    Class, Alignment and Stats you would have as a {'D&D'} Character!
            </p>
                    <Button
                     variant='contained'
                     color='primary'
                        onClick={() =>
                            this.startDaGame(store)
                        }>Start!</Button>
                </div>
            </div >)
    }
}

export default Store.withStore(Jumbotron);