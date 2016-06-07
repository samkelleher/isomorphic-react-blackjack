import React, {PropTypes} from 'react';
import {provideContext} from 'fluxible-addons-react';

const scripts = [];

@provideContext()
export default class Html extends React.Component {

    static propTypes = {
        context: PropTypes.object.isRequired,
        state: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        meta: {}
    };

    render() {
        const {state, content} = this.props;

        const title = 'Blackjack';

        return (
            <html lang="en">
            <head>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>{ title }</title>

                <meta charSet="utf-8"/>
                <meta content="text/html; charset=utf-8" httpEquiv="Content-Type"/>

            </head>

            <body>
            <div id="content" dangerouslySetInnerHTML={ {__html: content} }/>

            <script dangerouslySetInnerHTML={ {__html: state} }/>

            { scripts.map((src, i) => <script src={ src } key={ i }/>) }

            </body>
            </html>
        );
    }
}
