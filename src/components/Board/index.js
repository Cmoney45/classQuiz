import React, { Component } from 'react';
import PictureCards from "../Questionaire";
import Store from "../../store";

class Board extends Component {

    render() {
        const { store } = this.props

        return (
            <div>
        {
            store.get('gameRunning')
            ? <PictureCards /> : null
        }
        </div>
        )}
}

export default Store.withStore(Board);