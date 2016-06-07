import Actions from '../constants/Actions';
import Deck from '../models/Deck';
import Hand from '../models/Hand';

/**
 * Starts a new Blackjack game.
 * @param context
 * @param route
 * @constructor
 */
export default function StartNewGame(context, {route}) {
    return new Promise((resolve, reject) => {

        const deck = new Deck();

        deck.generate().shuffle();

        const player = new Hand(deck);
        const dealer = new Hand(deck);

        player.takeCard().takeCard();

        dealer.takeCard();

        context.dispatch(Actions.START_NEW_GAME, {
            deck,
            dealer,
            player
        });

        resolve();


    });
}
