import express from 'express';
import config from './config';

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

    return new Promise((resolve) => {

        server.listen(server.get('port'), () => {
            resolve(server);
        });

    });
}
