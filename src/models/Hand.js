import Card from './Card';

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

    /**
     * Get the current numeric score for this hand.
     * @returns {number}
     */
    getScore() {
        let numberOfAces = 0;
        let score = 0;
        
        this.cards.forEach((card) => {
            if (card.isAce()) {
                numberOfAces += 1;
            }
            score += card.getValue();
        });

        // In Blackjack, Aces have two values, when the value is above 21.
        while (score > 21 && numberOfAces > 0){
            score -= 10;
            numberOfAces -=1;
        }

        return score;
    }

    /**
     * Shortcut to indicate if this hand has lost by default.
     * @returns {boolean}
     */
    hasLost() {
        return this.getScore() > 21;
    }

    /**
     * This is used by the Dealer, when the Player 'sticks'. The dealer will take cards until they're broke.
     * @returns {Hand}
     */
    dealUntilHighest() {
        while (this.getScore() < 17) {
            this.takeCard();
        }
        return this;
    }

    /**
     * Serialize this hand to JSON.
     * @returns {{cards: Array}}
     */
    toJSON() {
        return {
            cards: this.cards.map((card) => card.toJSON())
        };
    }

    /**
     * Deserializet this hand from JSON.
     * @param handJson
     * @returns {Hand}
     */
    fromJSON(handJson) {
        this.cards = handJson.cards.map((cardJson) => new Card(cardJson.suit, cardJson.number));
        return this;
    }

}
