var webpackConfig = require('./webpack.config.dev');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            './test_index.js'
        ],
        exclude: [
        ],
        preprocessors: {
            './test_index.js': ['webpack', 'sourcemap']
        },
        webpack: {
             // This option controls if and how source maps are generated.
            devtool: 'inline-source-map',
            module: {
                // An array of Rules which are matched to requests when modules are created.
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        enforce: 'pre',
                        loader: 'tslint-loader'
                    },
                    {
                        test: /\.(ts|tsx)$/, // The Condition must match
                        exclude: /node_modules/, // The Condition must NOT match
                        loader: 'ts-loader'
                    },
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: {
                                loader: 'css-loader',
                            },
                        }),
                    },
                    // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
                    // Using here url-loader and file-loader
                    {
                        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                    },
                    {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                    },
                    {
                        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                    },
                    {
                        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                        loader: 'file-loader'
                    },
                    {
                        test: /\.(png|jpg)$/,
                        loader: 'url-loader',
                    }
                ],
                noParse: [
                    /node_modules(\\|\/)sinon/,
                ]
            },
            resolve: {
                // Automatically resolve certain extensions in this case js and jsx.
                extensions: ['.js', '.ts', '.tsx'],
                alias: {
                    sinon: 'sinon/pkg/sinon'
                }
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lob/ReactContext': 'window'
            }
        },
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
}