import React from 'react';
import StartNewGame from '../actions/StartNewGame';

export default class ResetButton extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    handleClick = (e) => {

        e.preventDefault();

        this.context.executeAction(StartNewGame, { });

    };
    
    render() {
        return (
            <button title="Start a new game." onClick={this.handleClick}>Reset</button>
        );
    }
}
