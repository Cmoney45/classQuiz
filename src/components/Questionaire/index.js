import React, { Component } from 'react';
import {
  List,
  ListItem,
  Divider,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core'
import "./style.css";
import Store from "../../store";

class PictureCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: "",
    };
  }

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

      for (let i = 0; i < characterValue.length; i++) {

        store.set(characterValue[i])(store.get(characterValue[i]) + increase)

      }

    }

    else {

      store.set(characterValue)(store.get(characterValue) + increase)

    }

    if (store.get("questionsAnswered") === (store.get("totalQuestions") - 1)) {
      store.set("gameRunning")(null);
      store.set("gameCompleted")(true);
    }
  }


  render() {

    const { store } = this.props
    // const [selectedIndex, setSelectedIndex] = React.useState(1);


    return (
      <Card>
        <CardContent>
          <CardHeader
            title={store.get('currentQuestionBank')[store.get('currentQuestionIndex')].question}
          />
          <List component="nav" aria-label="main mailbox folders">
            {store
              .get('currentQuestionBank')[store.get('currentQuestionIndex')]
              .answers
              .map((answer, index) => (
                <div>
                  <Divider
                    variant='fullWidth'
                  ></Divider>
                  <ListItem
                    button
                    key={index}
                    // id={index}
                    onClick={() => this.questionAnswer(answer, store)}
                  >
                    {answer.answer}
                  </ListItem>
                </div>
              ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default Store.withStore(PictureCard);