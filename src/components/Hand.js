import React from 'react';
import CardList from './CardList';

export default class Hand extends React.Component {
    render() {

        const {title, player} = this.props;

        const playerScore = player.getScore();

        return (
            <div>
                <h2>{title}: {playerScore}</h2>
                <CardList cards={player.cards}/>
            </div>
        );
    }
}
