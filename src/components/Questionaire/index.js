import React, { Component } from 'react';
import "./style.css";
import Store from "../../store";

class PictureCard extends Component {
  const
  questionAnswer = (userAnswer, store) => {
    // Store the Answer into an array to be analyzed later
    store
      .set('currentAnswers')(store.get('currentAnswers')
        .concat(userAnswer));

    // Update current Index
    store.set('currentQuestionIndex')(store.get('currentQuestionIndex') + 1);

    // Update questions Answered
    store.set('questionsAnswered')(store.get('questionsAnswered') + 1);

  };

  analyzeData = (store) => {
    let allAnswers = store.get('currentAnswesrs')

    for (let i = 0; i < allAnswers.length; i++) {
      switch (allAnswers[i]) {
        case "q41": switch (allAnswers[i].value) {
          case "2": charisma += 2; break;
          case "3": charisma += 3; break;
          case "4": charisma += 4; break;
          case "5": charisma += 5;
        };
        case "q42": switch (allAnswers[i].value) {
          case "2": intelligence += 2; break;
          case "3": intelligence += 3; break;
          case "4": intelligence += 4; break;
          case "5": intelligence += 5;
        };
        case "q43": switch (allAnswers[i].value) {
          case "1": charisma += 2; break;
          case "2": charisma += 3; break;
          case "4": charisma += 5; break;
          case "5": charisma += 4;
        };
        case "q43": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
        case "q44": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
        case "q45": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
        case "q46": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
        case "q47": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
        case "q48": switch (allAnswers[i].value) {
          case "1": wisdom += 5; break;
          case "2": wisdom += 4; break;
          case "3": wisdom += 3; break;
          case "4": wisdom += 2;
        };
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