/* eslint no-console: 0, no-var: 0 */
import Server from './server';

Server()
    .then((app) => {

        const env = app.get('env');

        console.log('------------------------------');
        console.log('--');
        console.log(`-- Blackjack Game ${env} server listening on http://${app.get('host')}:${app.get('port')}/ 🚀`);
        console.log('--');
        console.log('------------------------------');

    })
    .catch((e) => {
        console.log('Game server did not start due to an error. 😡');
    });
