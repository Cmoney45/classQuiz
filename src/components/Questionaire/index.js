import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";
import testBank from "../../questionBanks/abilityScores.json"

class PictureCard extends Component {

  render() {
    let state = this.props.store.state;
    console.log(testBank);

    return (
      <div className="card bg-dark">
        <p>{testBank[0].question}</p>
        {testBank[0].answers.map((answer, index) => (
          <button
          key={index}
            id={index}
            className="btn btn-primary btn-lg btn-block mycss-HMAnswerButton">
            {answer.answer}
          </button>
        ))}
      </div>
    );
  }
}

export default Store.withStore(PictureCard);