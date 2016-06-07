import React from 'react';
import Hit from '../actions/Hit';

export default class HitButton extends React.Component {
    handleClick = (e) => {

        e.preventDefault();

        this.context.executeAction(Hit, { });

    };

    render() {
        return (
            <button onClick={this.handleClick}>Hit</button>
        );
    }
}
