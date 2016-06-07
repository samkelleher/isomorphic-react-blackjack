import React from 'react';
import Card from './Card';
export default class CardList extends React.Component {
    render() {

        const {cards} = this.props;

        return (
            <ul>
                {cards.map((card) => {
                    return <li key={card.toID()}><Card card={card}/></li>;
                })}
            </ul>
        );
    }
}
