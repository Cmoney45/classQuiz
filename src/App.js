import React, { Component } from "react";
import PictureCards from "./components/PictureCards";
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/GameWrapper";
import dinosaurs from "./dinosaurs.json";
import "./App.css";

class App extends Component {
  state = {
    currentSet: dinosaurs,
    currentSetCount: 0,
    highScore: 0,
    score: 0,
    guessedImages: [],
  }

  userGuess = id => {
    const currentGuess = this.state.currentSet.filter(friend =>  friend.id === id);
    const guessedImages = this.state.guessedImages;
    let duplicateGuess = false;

    console.log(currentGuess)
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

    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        >
        </Navbar>
        <Jumbotron></Jumbotron>
        <Wrapper>
          {this.state.currentSet.map(friend => (
            <PictureCards
              removeFriend={this.userGuess}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
};

export default App;
