import React from 'react';
import CardList from './CardList';

export default class Hand extends React.Component {
    render() {

        const {title, player} = this.props;

        return (
            <div>
                <h2>{title}</h2>
                <CardList cards={player.cards}/>
            </div>
        );
    }
}
