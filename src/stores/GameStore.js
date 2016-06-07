import {BaseStore} from 'fluxible/addons';
import Actions from '../constants/Actions';

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
        return {
            deck: null,
            player: null,
            dealer: null
        };
    }

    rehydrate(state) {
        if (!state) {
            return;
        }

        const dealer = state.dealer;
        const player = state.player;
        const deck = state.deck;

        this.state = {
            deck,
            player,
            dealer
        };
    }
}
