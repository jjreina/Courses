'use strict'
var webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    // This option controls if and how source maps are generated.
    devtool: 'inline-source-map',
    module: {
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
});