import React from 'react';

class Choice extends React.Component {
    render() {
        return (
            <div className="choice">
                <button onClick={() => this.props.handleButtonClick(this.props.choiceIndex)} className="choice-btn">{this.props.text}</button>
            </div>
        );
    }
}

export default Choice;