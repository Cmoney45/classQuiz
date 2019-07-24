import React, { Component } from 'react';
import "./style.css";
import dinosaurs from "../../dinosaurs.json";

export default class GameWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSet: dinosaurs,
      currentSetCount: 0,
      highScore: 0,
      score: 0,
      guessedImages: [],

    };
  };

  userGuess = id => {
    const currentGuess = this.state.currentSet.filter(friend => friend.id === id);
    const guessedImages = this.state.guessedImages;
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

    this.shuffleCurretSet(this.state.currentSet);
  };

  updateScores = (correctGuess) => {
    let score = this.state.score;

    this.setState({ score: score + 1 })

    if (this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.highScore + 1 })
    }
    this.setState({ currentSetCount: this.state.currentSetCount + 1 })

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

    return (<div className="wrapper mt-3">
      {this.props.children}
    </div>
    );
  }
}
