import React from 'react';
import Choice from './Choice.jsx'

class ChoiceContainer extends React.Component {
    render() {
        return (
            <div className="choice-container">
                <Choice />
                <Choice />
                <Choice />
                <Choice />
            </div>
        );
    }
}

export default ChoiceContainer;