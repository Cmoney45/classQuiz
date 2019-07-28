import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";
import testBank from "../../questionBanks/abilityScores.json"

class PictureCard extends Component {

  questionAnswer = (state) => {
    state.currentQuestionIndex++;
    state.questionsAnswered++;
  }

  render() {
    let state = this.props.store.state;

    return (
      <div className="card bg-dark">
        <p>{testBank[state.currentQuestionIndex].question}</p>
        {testBank[state.currentQuestionIndex].answers.map((answer, index) => (
          <button
            key={index}
            id={index}
            className="btn btn-primary btn-lg btn-block mycss-HMAnswerButton"
            onClick={() => this.questionAnswer(state)}
          >
            {index + 1}{".   "}{answer.answer}
          </button>
        ))}
      </div>
    );
  }
}

export default Store.withStore(PictureCard);