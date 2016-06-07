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
        [Actions.START_NEW_GAME]: 'applyNewGame'
    };

    constructor(dispatcher) {
        super(dispatcher);
        this.state = null;
    }


    applyNewGame(game) {
        this.state = game;
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
            dealer
        };
    }
}
