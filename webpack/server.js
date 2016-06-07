/* eslint no-console: 0 */
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackDevConfig from './dev.config';

export default function WebpackServer() {

    const host = process.env.HOST || '0.0.0.0';
    const port = 3002;

    const options = {
        contentBase: `http://${host}:${port}`,
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackDevConfig.output.publicPath,
        stats: {
            colors: true,
            errorDetails: true
        }
    };

    const compiler = webpack(webpackDevConfig);
    const webpackDevServer = new WebpackDevServer(compiler, options);

    webpackDevServer.app.disable('x-powered-by');

    return new Promise((resolve) => {
        webpackDevServer.listen(port, host, () => {
            resolve({
                webpackDevServer,
                host,
                port
            });
        });
    });
}
