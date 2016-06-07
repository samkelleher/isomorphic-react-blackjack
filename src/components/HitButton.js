import React from 'react';
import Hit from '../actions/Hit';

export default class HitButton extends React.Component {

    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    };

    handleClick = (e) => {

        e.preventDefault();

        this.context.executeAction(Hit, { });

    };

    render() {
        return (
            <button title="Pick a card from the deck." onClick={this.handleClick}>Hit</button>
        );
    }
}
