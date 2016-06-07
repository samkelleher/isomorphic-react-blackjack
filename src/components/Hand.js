import React from 'react';
import CardList from './CardList';

export default class Hand extends React.Component {
    render() {

        const {title, player} = this.props;

        const playerScore = player.getScore();

        let winnerBadge = null;

        if (this.props.isWinner) {
            winnerBadge = <span>Winner!</span>;
        }

        return (
            <section className="hand">
                <h2>{title}: {playerScore} {winnerBadge}</h2>
                <CardList cards={player.cards}/>
            </section>
        );
    }
}
