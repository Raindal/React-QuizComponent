import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

const quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion = () => {
    this.setState(prevState => ({ quiz_position: prevState.quiz_position + 1 }));
  }

  handleResetClick = () => {
    this.setState({ quiz_position: 1 });
  }

  render() {
    const { quiz_position } = this.state;
    const isQuizEnd = quiz_position - 1 === quizData.quiz_questions.length;

    return (
      <div>
        { isQuizEnd && <QuizEnd resetClickHandler={this.handleResetClick} /> }
        {
          !isQuizEnd && (
            <QuizQuestion
              showNextQuestionHandler={this.showNextQuestion}
              quiz_question={quizData.quiz_questions[quiz_position - 1]}/>
          )
        }
      </div>
    );
  }
}

export default Quiz;
