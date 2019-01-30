import React from 'react';
import Choice from './Choice.jsx'

class ChoiceContainer extends React.Component {
    render() {
        return (
            <div className="choice-container">
                {this.props.choices.map(choice => (<Choice text={choice}/>))}
            </div>
        );
    }
}

export default ChoiceContainer;