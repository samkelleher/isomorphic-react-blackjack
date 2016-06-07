import React from 'react';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import app from '../Application';
import Html from '../containers/Html';
import RouteStore from '../stores/RouteStore';
import {navigateAction} from 'fluxible-router';

export default function RenderApplication(req, res, context, next, statusCode = 200) {
    try {

        const Application = app.getComponent();
        const componentContext = context.getComponentContext();
        const routeStore = componentContext.getStore(RouteStore);

        let html;

        const applicationToRender = <Application context={ componentContext }/>;

        const content = ReactDOMServer.renderToString(applicationToRender);

        // dehydrate the app and expose its state
        const state = 'window.__INITIAL_STATE__=' + serialize(app.dehydrate(context)) + ';';

        // The root component is rendered as static markup and sent as response.

        html = ReactDOMServer.renderToStaticMarkup(
            <Html
                context={ componentContext }
                lang={ req.locale }
                state={ state }
                content={ content }
            />
        );

        if (!html) {
            // Failed to load cache, or render anything.
            next(new Error('No exception was thrown, but no HTML was rendered.'));
            return;
        }

        const doctype = '<!DOCTYPE html>\n';

        res.set('Cache-Control', 'private');

        res
            .type('html')
            .status(statusCode)
            .send(doctype + html);
    }
    catch (e) {
        next(e);
    }
}
