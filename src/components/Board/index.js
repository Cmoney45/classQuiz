import React, { Component } from 'react';
import PictureCards from "../PictureCards";
import Store from "../../store";

class Board extends Component {

    render() {
        let { currentSet, userGuess } = this.props.store.state;

        return (
                  currentSet.map(friend => (
                    <PictureCards
                        removeFriend={userGuess}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                    />
                ))
        )}
    }

export default Store.withStore(Board);