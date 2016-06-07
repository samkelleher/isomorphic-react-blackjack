/* eslint no-console: 0, no-var: 0 */
import Fluxible from 'fluxible';
import Application from './containers/Application';
import RouteStore from './stores/RouteStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';

let app = new Fluxible({
    component: Application,
    componentActionErrorHandler: (context, payload, done) => {
        var err = payload.err;
        // Handle error by setting error state
        //context.dispatch('APPLICATION_ERROR', err);
        console.log('GLOBAL ERROR', err);
        throw err;
    }
});

app.plug(fetchrPlugin({
    xhrTimeout: '5000',
    xhrPath: '/fs',
    //corsPath: config.baseUrl
}));

app.registerStore(RouteStore);

export default app;
