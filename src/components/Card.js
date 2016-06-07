import React from 'react';

export default class Card extends React.Component {
    render() {

        const {card} = this.props;

        return (
            <h3>{card.toString()}</h3>
        );
    }
}
