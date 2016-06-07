import React from 'react';
import {provideContext} from 'fluxible-addons-react';
import {handleHistory} from 'fluxible-router';

// Wrap Root with the fluxible context.
@provideContext

// Wrap with fluxible-router's history handler (required for routing)
// This also passes `currentRoute` as prop to the component
@handleHistory

export default class Application extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    };

    static propTypes = {

        // props coming from fluxible-router's handleHistory
        isNavigateComplete: React.PropTypes.bool,
        currentRoute: React.PropTypes.object,
        currentNavigateError: React.PropTypes.shape({
            statusCode: React.PropTypes.number.isRequired,
            message: React.PropTypes.string.isRequired
        })

    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { currentRoute, currentNavigateError, isNavigateComplete } = this.props;

        const params = currentRoute && currentRoute.params;

        const Handler = currentRoute && currentRoute.handler;

        let content;

        if (currentNavigateError && currentNavigateError.statusCode === 404) {
            // This 'not found' error comes from a page init actions
            //content = <NotFoundPage />;
        }
        else if (currentNavigateError) {
            // Generic error, usually always with statusCode 500
            //content = <ErrorPage err={ currentNavigateError }/>;
        }
        else if (!Handler) {
            // No handler: this is another case where a route is not found (e.g.
            // is not defined in the routes.js config)
            //content = <NotFoundPage />;
        }
        else if (!isNavigateComplete && true === false) { // Temp disable loading.
            // Render a loading page while waiting the route's action to finish
            //content = <LoadingPage />;
        }
        else {
            // Render the Handler (aka the page) for the current route.
            content = <Handler params={params} currentRoute={currentRoute}/>;
        }

        return content;
    }
}
