import InitiateStartNewGame from './initiators/InitiateStartNewGame';
import Table from './components/Table';
/**
 * Register all the routes for the application.
 * The routes follow the pattern defined at https://github.com/pillarjs/path-to-regexp
 */
export default {
    home: {
        path: '/',
        method: 'get',
        handler: Table,
        label: 'Home',
        action: InitiateStartNewGame,
        title: 'Blackjack',
        description: 'A simple game of isomorphic JavaScript Blackjack.'
    }
};
