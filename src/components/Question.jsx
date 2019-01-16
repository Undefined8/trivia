import React, { Component } from 'react';
import QuestionText from "./QuestionText.jsx";
import ChoiceContainer from "./ChoiceContainer.jsx";

class Question extends Component {

  render() {
    return (
      <div>
        <QuestionText />
        <ChoiceContainer />
      </div>
    );
  }
}

export default Question;
