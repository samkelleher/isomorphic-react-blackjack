import Confidence from 'confidence';
import getenv from 'getenv';

const criteria = {
    env: getenv('NODE_ENV', 'development')
};
const config = {
    $meta: 'This file configures the web application.',
    server: {
        port: getenv.int('PORT', 8080),
        host: getenv('HOST', '0.0.0.0'),
        behindProxy: false

    }
};

const store = new Confidence.Store(config);

export default function get(key) {

    return store.get(key, criteria);
}

export function meta(key) {

    return store.meta(key, criteria);
}
