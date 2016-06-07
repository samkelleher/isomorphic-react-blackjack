import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import Hand from './Hand';
import StickButton from './StickButton';
import HitButton from './HitButton';
import ResetButton from './ResetButton';

import GameStore from '../stores/GameStore';

@connectToStores([GameStore], (context) => ({
    gameStore: context.getStore(GameStore).getState()
}))
export default class Table extends React.Component {
    render() {

        const {deck, player, dealer, outcome} = this.props.gameStore;

        let commands;
        let winner = null;
        if (outcome.settled) {
            commands = <ResetButton />;
            winner = outcome.winner;
        } else {
            commands = (<section>
                <HitButton />
                <StickButton />
            </section>);
        }

        return (
            <div>
                <h1>Welcome to the Blackjack Game.</h1>

                {commands}

                <section className="hands">
                    <Hand title="Player" isWinner={winner==='Player'} player={player}/>
                    <Hand title="Dealer" isWinner={winner==='Dealer'} player={dealer}/>
                </section>

            </div>
        );
    }
}
