import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";


class Jumbotron extends Component {

    render() {

        const { store } = this.props

        return (store.get('gameRunning') ? null : <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">{`D&D Class Quiz`}</h1>
                <p className="lead text-center">
                    Click go to find out what Race, Class, Alignment and Stats you are!
            </p>
                <button
                    className='btn btn-primary btn-sm btn-block'
                    onClick={() => 
                    store.set('gameRunning')(true)}>Start!</button>
            </div>
        </div>)
    }
}

export default Store.withStore(Jumbotron);