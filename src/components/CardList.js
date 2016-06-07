import React from 'react';
import Card from './Card';
export default class Hand extends React.Component {
    render() {

        const {cards} = this.props;

        return (
            <ul>
                {cards.map((card) => {
                    return <Card key={card.toID()} card={card}/>;
                })}
            </ul>
        );
    }
}
