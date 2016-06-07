import Application from '../Application';
import { navigateAction } from 'fluxible-router';
import RenderApplication from './RenderApplication';
import Debug from 'debug';

const debug = Debug('App:HandleServerRendering');

/**
 * Basically the magic that allows the server side to execute the same React + Flux application as the browser.
 * @param req - The HTTP Request
 * @param res - The HTTP Response
 * @param next - The next callback, letting Express continue with its routing and request handling.
 * @constructor
 */
export default function HandleServerRendering (req, res, next) {
    const context = Application.createContext({
        req: req
    });

    context
        .executeAction(navigateAction, {url: req.url})
        .then(() => RenderApplication(req, res, context, next))
        .catch(err => {
            if (err.statusCode || err.status) {
                debug('Rendering via error: ', err);
                //LogRouteError(err, req);
                // The navigateAction has provided an error, we'll handle it within the app.
                // The Application component will detect the error and render the page for it.
                RenderApplication(req, res, context, next, (err.statusCode || 500));
                return;
            }
            // Some other type of error, likely broken rendering, need to fall back
            // to a static non-react based page with code 500.
            debug('Unable to render, hard failing to error: ', err);
            next(err);
        });
}
