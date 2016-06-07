import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import Hand from './Hand';
import GameStore from '../stores/GameStore';

@connectToStores([GameStore], (context) => ({
    gameStore: context.getStore(GameStore).getState()
}))
export default class Table extends React.Component {
    render() {

        const {deck, player, dealer} = this.props.gameStore;

        return (
            <div>
                <h1>Welcome to the Blackjack Game.</h1>

                <Hand title="Player" player={player}/>

                <Hand title="Dealer" player={dealer}/>
            </div>
        );
    }
}
