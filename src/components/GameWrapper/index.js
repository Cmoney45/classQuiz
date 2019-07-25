import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

export default class GameWrapper extends Component {

  userGuess = id => {
    const currentGuess = Store.currentSet.filter(friend => friend.id === id);
    const guessedImages = Store.guessedImages;
    let duplicateGuess = false;

    for (let i in guessedImages) {
      if (currentGuess[0].id === guessedImages[i].id) {
        duplicateGuess = true;
      }
    }

    if (duplicateGuess === true) {
      this.setState({ score: 0, currentSetCount: 0 })
      this.setState({ guessedImages: [] })
    } else {
      guessedImages.push(currentGuess[0]);
      this.updateScores();
      this.setState({ guessedImages: guessedImages });
    }

    this.shuffleCurretSet(Store.currentSet);
  };

  updateScores = (correctGuess) => {
    let score = Store.score;

    this.setState({ score: score + 1 })

    if (Store.score >= Store.highScore) {
      this.setState({ highScore: Store.highScore + 1 })
    }
    this.setState({ currentSetCount: Store.currentSetCount + 1 })

  }

  shuffleCurretSet = (setToShuffle) => {
    let ctr = setToShuffle.length;
    let newSet = setToShuffle;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = newSet[ctr];
      newSet[ctr] = newSet[index];
      newSet[index] = temp;
    }

    this.setState({ currentSet: newSet })
  }

  render() {

    return (
      <div className="wrapper mt-3">
        {this.props.children}
      </div>
    );
  }
}
