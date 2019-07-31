import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

class PictureCard extends Component {
  const
  questionAnswer = (userAnswer, store) => {
    let { characterValue, increase } = userAnswer;

    increase = parseInt(increase);

    // Store the Answer into an array to be analyzed later
    store
      .set('currentAnswers')(store.get('currentAnswers')
        .concat(userAnswer));

    // Update current Index
    store.set('currentQuestionIndex')(store.get('currentQuestionIndex') + 1);

    // Update questions Answered
    store.set('questionsAnswered')(store.get('questionsAnswered') + 1);

    if (Array.isArray(characterValue)) {

      console.log(characterValue, characterValue.length)

      for (let i = 0; i < characterValue.length; i++) {

        store.set(characterValue[i])(store.get(characterValue[i]) + increase)

      }

    }

    else {

      store.set(characterValue)(store.get(characterValue) + increase)

    }
    
    if (store.get("questionsAnswered") === (store.get("totalQuestions") - 1)) {
      store.set("gameRunning")(false);
    }
  }

  render() {

    const { store } = this.props

    return (
      <div className="card bg-dark mt-4">
        <p>
          {store.get('currentQuestionBank')[store.get('currentQuestionIndex')].question}
        </p>
        {store
          .get('currentQuestionBank')[store.get('currentQuestionIndex')]
          .answers
          .map((answer, index) => (
            <button
              key={index}
              id={index}
              className="btn btn-primary btn-lg btn-block mycss-HMAnswerButton"
              onClick={() => this.questionAnswer(answer, store)}
            >
              {answer.answer}
            </button>
          ))}
      </div>
    );
  }
}

export default Store.withStore(PictureCard);