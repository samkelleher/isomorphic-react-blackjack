import React from 'react';
import Stick from '../actions/Stick';

export default class StickButton extends React.Component {

    handleClick = (e) => {

        e.preventDefault();

        this.context.executeAction(Stick, { });

    };
    
    render() {
        return (
            <button onClick={this.handleClick}>Stick</button>
        );
    }
}
