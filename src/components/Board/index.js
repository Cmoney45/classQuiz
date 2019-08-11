import React, { Component } from 'react';
import Jumbotron from "../Jumbotron";
import Questionaire from "../Questionaire";
import Results from '../Results'
import Store from "../../store";
import "./style.css";

class Board extends Component {

    render() {
        const { store } = this.props

        return (

            store.get('gameRunning')
                ?
                < div className="mt-5" >
                    {
                        store.get('gameRunning')
                            ? <Questionaire />
                            : null
                    }
                </div >
                : store.get('gameCompleted')
                    ? <Results />
                    : <Jumbotron />

        )
    }
}

export default Store.withStore(Board);