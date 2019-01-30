import React, { Component } from 'react';
import QuestionText from "./QuestionText.jsx";
import ChoiceContainer from "./ChoiceContainer.jsx";

class Question extends Component {
  
  choices = ["Rock", "Paper", "Scissors", "Lizard"];
  question = "What beats Rock?";
  
  render() {
    return (
      <div className="question-container">
        <QuestionText text={this.question}/>
        <ChoiceContainer choices={this.choices}/>
      </div>
    );
  }
}

export default Question;
