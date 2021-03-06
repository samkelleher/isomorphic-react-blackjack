/**
 * A single playing card.
 */
export default class Card {

    /**
     * Create a new card.
     * @param suit - The suit.
     * @param number - The card number.
     */
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }

    isAce() {
        return this.number === 1;
    }

    getType() {
        switch (this.number) {
            case 1:
                return 'Ace';
                break;
            case 13:
                return 'King';
                break;
            case 12:
                return 'Queen';
                break;
            case 11:
                return 'Jack';
                break;
            default:
                return this.number;
                break;
        }
    }

    getNumber() {
        return this.number;
    }

    getSuit() {
        return this.suit;
    }

    getValue() {

        // Pictured cards are worth 10 points.
        if (this.number >= 10) {
            return 10;
        }

        // An Ace (ID 1) can be worth 11 or 1 points, account for this.
        if (this.number === 1) {
            return 11;
        }

        // All other cards carry their own value as normal.
        return this.number;
    }

    toString() {
        return `${this.getType()} of ${this.suit}`;
    }

    toID() {
        return `${this.getType()}-${this.suit}`;
    }

    toJSON() {
        return {
            number: this.number,
            suit: this.suit
        };
    }


}
