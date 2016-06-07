import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import Debug from 'debug';
import './sass/index.scss';

const dehydratedState = window.__INITIAL_STATE__; // Sent from the server
const debug = Debug('App:Client');

Debug.enable('*,-sockjs-client:*');

debug('Rehydrating state...');

Application.rehydrate(dehydratedState, (err, context) => {
    if (err) {
        throw err;
    }
    debug('State rehydrated.');
    delete window.__INITIAL_STATE__;
    window.context = context;
    const mountNode = document.getElementById('content');

    const Root = Application.getComponent();

    ReactDOM.render(<Root context={ context.getComponentContext() }/>, mountNode, () => {
        debug('Root component has been mounted');
    });
    debug('dehydratedState', dehydratedState);

});
