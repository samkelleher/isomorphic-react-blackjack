/**
 * A hand is the number of single cards held from a deck by an individual player.
 */
export default class Hand {
    constructor(deck) {
        this.deck = deck;
        this.cards = [];
    }

    /**
     * Take a card from the top of the current deck.
     * @returns {Hand}
     */
    takeCard() {
        this.cards.push(this.deck.deal());
        return this;
    }
}