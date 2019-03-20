import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import { buildFirebase } from '../clients/firebase';

class App extends Component {

  constructor(props) {
    super(props);

    let firebaseDatabase = buildFirebase();

    firebaseDatabase.ref('/questions').on('value', (snapshot) => {
      console.log(snapshot.val());

      let questionsObj = snapshot.val();
      let questionsArr = Object.keys(questionsObj);

      let numQuestions = questionsArr.length;
      let randomIndex = Math.floor(Math.random() * numQuestions);

      let randomQuestion = snapshot.val()[questionsArr[randomIndex]];

      console.log("Question: ", randomQuestion);

      this.setState({
        questions: questionsObj,
        currentQuestion: randomQuestion
      });
    });

    this.state = {
      questions: {},
      currentQuestion: {
        question_text: "Loading...",
        choices: [],
        correct_choice_index: null,
      },
      selectedChoiceIndex: null,
      isCorrectAnswer: false
    };
  }

  resetHandler = () => {
    let questionsArr = Object.keys(this.state.questions);

    let numQuestions = questionsArr.length;
    let randomIndex = Math.floor(Math.random() * numQuestions);

    this.setState({
      currentQuestion: this.state.questions[questionsArr[randomIndex]],
      selectedChoiceIndex: null,
      isCorrectAnswer: false
    }, console.log("Inside Reset Handler", this.state));

    //console.log("Inside Reset Handler", this.state);
  }

  handleButtonClick = (choiceIndex) => {
    if (choiceIndex === this.state.currentQuestion.correct_choice_index) {
      this.setState({
        currentQuestion: {
          ...this.state.currentQuestion,
          question_text: "Correct!!"
        },
        isCorrectAnswer: true
      }, () => {
        setTimeout(() => {this.resetHandler()}, 1500);
      });
    }
    else {
      alert('THE DOG PANTS GOD NAMED JEFF IS SAD AND IS POUTING YOU ARE WRONG!!!!!!!!!!!!');
    }
    this.setState({
      selectedChoiceIndex: choiceIndex
    });
  }

  render() {
    //console.log("After State:", this.state);
    return (
      <div className="app">
        <Question handleButtonClick={this.handleButtonClick} question={this.state.currentQuestion} resetHandler = {this.resetHandler}/>
      </div>
    );
  }
}

export default App;
