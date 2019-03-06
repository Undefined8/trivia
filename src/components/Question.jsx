import React, { Component } from 'react';
import QuestionText from "./QuestionText.jsx";
import ChoiceContainer from "./ChoiceContainer.jsx";


class Question extends Component {
  
  render() {
    return (
      <div className="question-container">
        <QuestionText text={this.props.question.question_text} resetHandler={this.props.resetHandler}/>
        <ChoiceContainer handleButtonClick={this.props.handleButtonClick} choices={this.props.question.choices}/> 
      </div>
    );
  }
}

export default Question;
