import React from 'react';
import Stick from '../actions/Stick';

export default class StickButton extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    handleClick = (e) => {

        e.preventDefault();

        this.context.executeAction(Stick, { });

    };
    
    render() {
        return (
            <button title="The Dealer will pick a card from the deck." onClick={this.handleClick}>Stick</button>
        );
    }
}
