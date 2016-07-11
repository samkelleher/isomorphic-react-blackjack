import express from 'express';
import config from './config';
import Application from './Application';
import BodyParser from 'body-parser';
import HandleServerRendering from './server/HandleServerRendering';
import Favicon from './server/Favicon';

export default function () {

    const server = express();

    server.set('env', process.env.NODE_ENV || 'development');
    server.set('host', config('/server/host'));
    server.set('port', config('/server/port'));

    if (config('/server/behindProxy')) {
        server.enable('trust proxy');
    }

    server.disable('x-powered-by');
    server.disable('etag');

    const fetchr = Application.getPlugin('FetchrPlugin');
    server.use(fetchr.getXhrPath(), BodyParser.json(), fetchr.getMiddleware());

    // Handle favicon to stop it filling the log
    server.use('/favicon.ico', Favicon);

    // Render the page server-side and send it as response.
    server.use(HandleServerRendering);

    return new Promise((resolve) => {

        server.listen(server.get('port'), () => {
            resolve(server);
        });

    });
}
