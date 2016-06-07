import {BaseStore} from 'fluxible/addons';
import Actions from '../constants/Actions';
import Deck from '../models/Deck';
import Hand from '../models/Hand';
import Debug from 'debug';

const debug = Debug('App:GameStore');
/**
 * A store for storing the actual game state.
 */
export default class extends BaseStore {

    static storeName = 'GameStore';

    static handlers = {
        [Actions.START_NEW_GAME]: 'applyNewGame',
        [Actions.PLAYER_HIT]: 'playerHit',
        [Actions.PLAYER_STICK]: 'playerStick'
    };

    playerHit() {
        this.state.player.takeCard();
        if (this.state.player.hasLost()) {
            this.calculateWinner();
        }
        this.emitChange();
    }

    playerStick() {
        this.state.dealer.dealUntilHighest();
        this.calculateWinner();
        this.emitChange();
    }

    calculateWinner() {

        const outcome = {
            dealerScore: this.state.dealer.getScore(),
            playerScore: this.state.player.getScore(),
            settled: false
        };

        if (outcome.playerScore > 21 || outcome.dealerScore === 21) {
            outcome.settled = true;
            outcome.winner = 'Dealer';
            outcome.dealerWins = true;
        } else if (outcome.dealerScore > 21 || outcome.playerScore === 21 || outcome.playerScore > outcome.dealerScore) {
            outcome.settled = true;
            outcome.winner = 'Player';
            outcome.playerWins = true;
        } else if (outcome.dealerScore > outcome.playerScore) {
            outcome.settled = true;
            outcome.winner = 'Dealer';
            outcome.dealerWins = true;
        } else if (outcome.dealerScore === outcome.playerScore) {
            outcome.settled = true;
            outcome.winner = 'Draw';

        }

        this.state.outcome = outcome;
    }

    constructor(dispatcher) {
        super(dispatcher);
        this.state = null;
    }

    applyNewGame(game) {
        this.state = game;
        // TODO: Put the outcome generation in one place.
        this.state.outcome = {settled: false};
        this.emitChange();
    }

    getState() {
        return this.state;
    }

    dehydrate() {

        if (!this.state) {
            return null;
        }

        return {
            deck: this.state.deck.toJSON(),
            player: this.state.player.toJSON(),
            dealer: this.state.dealer.toJSON()
        };
    }

    rehydrate(state) {
        debug('Rehydrating', state);
        if (!state) {
            return;
        }

        const deck = new Deck().fromJSON(state.deck);

        const dealer = new Hand(deck).fromJSON(state.dealer);
        const player = new Hand(deck).fromJSON(state.player);

        this.state = {
            deck,
            player,
            dealer,
            outcome: {settled: false}
        };

        //this.calculateWinner();
    }
}
