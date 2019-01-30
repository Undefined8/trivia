import React from 'react';

class Choice extends React.Component {
    render() {
        return (
            <div className="choice">
                <button className="choice-btn">{this.props.text}</button>
            </div>
        );
    }
}

export default Choice;