import React from 'react';

class QuestionText extends React.Component {
    render() {
        return (
            <div className="question-text">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default QuestionText;
