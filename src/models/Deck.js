import Card from './Card';
import shuffle from 'lodash.shuffle';
import Suits from '../constants/Suits';
/**
 * A deck of cards.
 */
export default class Deck {

    constructor() {
        this.cards = [];
    }

    generate() {

        // Reference: http://jsfiddle.net/scottux/HtZu6/

        let i,
            suitValue,
            number;
        for (i = 0; i < 52; i++) {
            suitValue = i % 4 + 1;
            number = i % 13 + 1;

            let suit;
            switch (suitValue) {
                case 1:
                    suit = Suits.Hearts;
                    break;
                case 2:
                    suit = Suits.Clubs;
                    break;
                case 3:
                    suit = Suits.Spades;
                    break;
                case 4:
                    suit = Suits.Diamonds;
                    break;
            }

            const card = new Card(suit, number);

            this.cards.push(card);
        }

        return this;
    }

    shuffle() {
        this.cards = shuffle(this.cards);
        return this;
    }

    /**
     * Take a card of the top of the deck.
     * @returns {Card} - A card taken from the top of the deck.
     */
    deal() {
        if (!this.cards.length) {
            throw new Error('No cards left.');
        }

        return this.cards.pop();
    }

    toJSON() {
        return this.cards.map((card) => card.toJSON());
    }

    fromJSON(deckJson) {
        this.cards = deckJson.map((cardJson) => new Card(cardJson.suit, cardJson.number));
        return this;
    }

}
