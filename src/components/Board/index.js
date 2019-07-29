import React, { Component } from 'react';
import PictureCards from "../Questionaire";
import Store from "../../store";
import "./style.css";

class Board extends Component {

    render() {
        const { store } = this.props

        return (
            <div className="mt-5">
        {
            store.get('gameRunning')
            ? <PictureCards /> : null
        }
        </div>
        )}
}

export default Store.withStore(Board);