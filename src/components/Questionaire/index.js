import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

class PictureCard extends Component {

  questionAnswer = (store) => {
    store.set('currentQuestionIndex')(store.get('currentQuestionIndex') + 1);
    store.set('questionsAnswered')(store.get('questionsAnswered') + 1);
  }
  render() {

    const { store } = this.props

    return (
      <div className="card bg-dark">
        <p>{store.get('currentQuestionBank')[store.get('currentQuestionIndex')].question}</p>
        {store.get('currentQuestionBank')[store.get('currentQuestionIndex')].answers.map((answer, index) => (
          <button
            key={index}
            id={index}
            className="btn btn-primary btn-lg btn-block mycss-HMAnswerButton"
            onClick={() => this.questionAnswer(store)}
          >
            {answer.answer}
          </button>
        ))}
      </div>
    );
  }
}

export default Store.withStore(PictureCard);