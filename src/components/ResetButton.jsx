import React from 'react';

class ResetButton extends React.Component {
    render() {
        return (<div> 
            <button onClick={() => {this.props.resetHandler()}} className="reset-btn">Reset</button>
        </div>);
    }
}

export default ResetButton;