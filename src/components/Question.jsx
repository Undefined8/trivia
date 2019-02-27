import React, { Component } from 'react';
import QuestionText from "./QuestionText.jsx";
import ChoiceContainer from "./ChoiceContainer.jsx";

class Question extends Component {
  
  render() {
    return (
      <div className="question-container">
        <ResetButton />
        <QuestionText text={this.props.question.question_text}/>
        <ChoiceContainer handleButtonClick={this.props.handleButtonClick} choices={this.props.question.choices}/> 
      </div>
    );
  }
}

export default Question;
