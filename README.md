# Blackjack
> An isomorphic demo application for playing Blackjack using ReactJS, Node, and Fluxible.

## Getting Started
Running this web application assumes knowledge of NodeJS, and has only been tested in *Node v6*.

After running `npm install` you can run a hot-loading dev server to test and develop the application:

```
$ npm run dev
```

When open browse to [http://localhost:8080/](http://localhost:8080/), from there you can play the game. Make any CSS or
Component updates to your code to observe live updating taking place.

## Background Story

A simple HTML/JavaScript game of [Blackjack](http://en.wikipedia.org/wiki/Blackjack).

The game follows the following simple set of rules:

There is a standard set of 52 cards. When the game starts, the player is given 2
random cards and the dealer is given one which the player can see. Each numbered
card has its face value, the ace can be either 1 or 11 and picture cards are
worth 10 points.

The player is given the following 2 options: 'hit' or 'stick'.

The player can 'hit' or 'stick' until they are either happy with the sum of the
values of their cards or until the total of their cards add up to 21 or over.
If their hand is over 21, they lose. Otherwise, if they stick, the dealer
will then start drawing cards until they either have a closer total to 21.
If the dealer goes over then the player wins.

## Next Steps

* App is isomorphic, but the game state is not currently sent to the server. If it were, would enable the dealer to be
another player, or would be possible to share and restore favourite games. Perhaps a more complex game than Blackjack
would be suitable to have its game state saved and stored server side.
