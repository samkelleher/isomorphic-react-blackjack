/* eslint no-var: 0, no-console: 0 */
import path from 'path';
import webpack from 'webpack';

const host = process.env.HOST || '0.0.0.0';
const port = (process.env.PORT + 1) || 3002;
const dist = path.resolve(__dirname, '../static/js');

// This is the webpack config to use during development.
// It enables the hot module replacement, the source maps and inline CSS styles.
const config = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        './src/client.js'
    ],
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path: dist,
        publicPath: 'http://' + host + ':' + port + '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: [
                        'transform-decorators-legacy'
                    ],
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true']
            },
            {
                test: /\.(jpe?g|webp|png|ico|gif|svg)$/,
                loader: 'file'
            }
        ],
        noParse: []
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /client\/config\./),
        // ignore HtmlHeadStore when called in app (to keep it server side only).
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BROWSER: JSON.stringify(true),
                DEBUG: JSON.stringify('*,-sockjs-client:*')
            }
        })
    ]
};

export default config;
