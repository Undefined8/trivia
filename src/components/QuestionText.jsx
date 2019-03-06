import React from 'react';
import ResetButton from "./ResetButton.jsx";

class QuestionText extends React.Component {
    render() {
        return (
            <div className="stage">
                <div className="button-row">
                    <ResetButton resetHandler={this.props.resetHandler}/>
                </div>
                <div className="question-text">
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default QuestionText;
