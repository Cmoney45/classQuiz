import React, { Component } from 'react';
import PictureCards from "../Questionaire";
import Store from "../../store";

class Board extends Component {

    render() {
        return (
                    <PictureCards
                    />
        )}
    }

export default Store.withStore(Board);